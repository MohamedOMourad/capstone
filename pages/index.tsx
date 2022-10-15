import type { NextPage } from 'next'
import { useState } from 'react'
import Advertise from '../components/Advertise'
import Header from '../components/Header'
import LoginModel from '../components/LoginModel'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header setOpen={setOpen} />
      <Advertise />
      <LoginModel open={open} setOpen={setOpen} />
    </>
  )
}

export default Home
