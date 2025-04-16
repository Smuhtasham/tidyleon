import React from 'react'
import HeroSection from './HeroSection'
import Header from './Header'
import Footer from './Footer'
import Services from './Services'
import WhyUs from './WhyUs'
import Cleaner from './Cleaner'
import Testimonials from './Testimonials'

const MainPage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Services/>
    <WhyUs/>
    <Testimonials/>
    <Cleaner/>
    <Footer/>
    </>
  )
}

export default MainPage