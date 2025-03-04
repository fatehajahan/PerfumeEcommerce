import React from 'react'
import Navbar from '../../components/Home/Navbar/Navbar'
import Banner from '../../components/Home/Banner/Banner'
import NewArraival from '../../components/Home/NewArraival/NewArraival'
import BestSellers from '../../components/Home/BestSellers/BestSellers'
import Discovery from '../../components/Home/Discovery/Discovery'
import ShopNow from '../../components/Home/ShopNow/ShopNow'
import Catagory from '../../components/Home/Catagory/Catagory'
import Footer from '../../components/Home/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NewArraival />
      <BestSellers />
      <Discovery />
      <ShopNow />
      <Catagory/>
      <Footer/>
    </>
  )
}

export default Home