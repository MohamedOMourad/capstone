import { Product } from '@prisma/client'
import type { NextPage } from 'next'
import Advertise from '../components/Advertise'
import Hero from '../components/Hero'
import Tap from '../components/Tap'
import { prisma } from '../lib/prisma'
import { useEffect } from 'react'
import io from 'Socket.IO-client'
import Chat from '../components/Chat'
const Home: NextPage = ({ products }: { products?: Product[] }) => {




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