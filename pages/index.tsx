import { Product } from '@prisma/client'
import type { NextPage } from 'next'
import { useState } from 'react'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import Gallary from '../components/Gallary'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LoginModel from '../components/LoginModel'
import Tap from '../components/Tap'
import { prisma } from '../lib/prisma'
const Home: NextPage = ({ products }: { products?: Product[] }) => {
  return (
    <>
      <Tap />
      <Hero/>
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