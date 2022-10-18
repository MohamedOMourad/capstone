import type { NextPage } from 'next'
import { useState } from 'react'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginModel from '../components/LoginModel'
import NewHeader from '../components/NewHeader'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* <Header setOpen={setOpen} /> */}
      <NewHeader/>
      <Advertise />
      <LoginModel open={open} setOpen={setOpen} />
      <Footer/>
    </>
  )
}

export default Home
