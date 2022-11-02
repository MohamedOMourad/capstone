import { Product } from '@prisma/client'
import { useUser } from '@supabase/auth-helpers-react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Advertise from '../components/Advertise'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Tap from '../components/Tap'
import { prisma } from '../lib/prisma'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { setProducts } from '../redux/product/product'
import { openSocket } from '../redux/socket io/socket'
const Home: NextPage = ({ products }: { products?: Product[] }) => {
  // const [filteredProduct, setFilteredProduct] = useState(products)
  const dispatch = useAppDispatch();
  const filteredProduct = useAppSelector((state) => state.product.filteredProducts)
  const user = useUser();
  useEffect(() => {
    dispatch(setProducts(products!))
    // Only run query once user is logged in.
    if (user) dispatch(openSocket(user.id));
  }, [user]);

  const filterProducts = (filter: string) => {
    console.log(filter)

  }
  return (
    <>
      <Tap />
      <Hero />
      <Advertise products={filteredProduct!} />
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