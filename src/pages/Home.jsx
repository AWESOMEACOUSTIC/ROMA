import React from 'react'
import DefineUs from '../sections/DefineUs'
import Stories from '../sections/Stories'
import Footer from '../sections/Footer'
import Carousel from '../sections/Carousel'
import Intro from '../sections/Intro'
import BannerImage from '../sections/BannerImage'

function Home() {
  return (
    <div>
      <DefineUs />
      <Stories />
      <Intro />
      <Carousel />
      <BannerImage />
      {/* <HeroImage /> */}
      {/* <Navigation /> */}
      <Footer />
    </div>
  )
}

export default Home