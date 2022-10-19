import type { NextPage } from 'next'
import { useState } from 'react'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginModel from '../components/LoginModel'
import Vehicle from '../components/Vehicle'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header setOpen={setOpen} />
      <Advertise />
      <LoginModel open={open} setOpen={setOpen} />
      <Footer />
      {/* <Vehicle/> */}
    </>
  )
}

export default Home
