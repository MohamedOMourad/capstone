import { Product } from '@prisma/client'
import { useUser } from '@supabase/auth-helpers-react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Advertise from '../components/Advertise'
import Hero from '../components/Hero'
import Tap from '../components/Tap'
import { prisma } from '../lib/prisma'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { openSocket } from '../redux/socket io/socket'
const Home: NextPage = ({ products }: { products?: Product[] }) => {
  const [filteredProduct, setFilteredProduct] = useState(products)
  const id = useAppSelector((state) => state.socketConnection.id)
  const dispatch = useAppDispatch()
  const user = useUser();
  useEffect(() => {
    // Only run query once user is logged in.
    if (user) dispatch(openSocket(user.id));
  }, [user]);

  const filterProducts = (filter: string) => {
    console.log(filter)
    switch (filter) {
      case 'All':
        setFilteredProduct(products);
        break;
      case 'Vehicles':
        const vehicles = products?.filter((product) => product.categoryId === 1)
        setFilteredProduct(vehicles);
        break;
      case 'Properties':
        const Properties = products?.filter((product) => product.categoryId === 3)
        setFilteredProduct(Properties);
        break;
      case 'Mobile Phones':
        const MobilePhones = products?.filter((product) => product.categoryId === 2)
        setFilteredProduct(MobilePhones);
        break;
      default:
        const searchedProducts = products?.filter((product) => product.brand?.indexOf(filter)! >= 0)
        setFilteredProduct(searchedProducts);
    }
  }
  return (
    <>
      <Tap filterProducts={filterProducts} />
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