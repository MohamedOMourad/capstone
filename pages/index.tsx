import { Product } from '@prisma/client'
import { useUser } from '@supabase/auth-helpers-react'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import Advertise from '../components/Advertise'
import Hero from '../components/Hero'
import Tap from '../components/Tap'
import { prisma } from '../lib/prisma'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { openSocket } from '../redux/socket io/socket'
const Home: NextPage = ({ products }: { products?: Product[] }) => {
  const id = useAppSelector((state) => state.socketConnection.id)
  const dispatch = useAppDispatch()
  const user = useUser();
  useEffect(() => {
    // Only run query once user is logged in.
    if (user) dispatch(openSocket(user.id));
  }, [user]);
  return (
    <>
      <Tap />
      <Hero />
      <Advertise products={products!} />
    </>
  )
}

export default Home;
export async function getServerSideProps() {

  const products = await prisma?.product.findMany({ include: { images: true } })
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}