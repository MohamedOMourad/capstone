import { Product } from '@prisma/client'
import type { NextPage } from 'next'
import { useState } from 'react'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import Gallary from '../components/Gallary'
import Header from '../components/Header'
import LoginModel from '../components/LoginModel'
import { prisma } from '../lib/prisma'
const Home: NextPage = ({ products }: { products?: Product[] }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header setOpen={setOpen} />
      <Advertise products={products!} />
      <LoginModel open={open} setOpen={setOpen} />
      <Footer />
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