import React from 'react'
import DefineUs from '../sections/DefineUs'
import Stories from '../sections/Stories'
import Footer from '../sections/Footer'
import Carousel from '../sections/Carousel'
import Intro from '../sections/Intro'

function Home() {
  return (
    <div>
      <DefineUs />
      <Intro />
      <Carousel />
      <Stories />
      {/* <HeroImage /> */}
      {/* <Navigation /> */}
      <Footer />
    </div>
  )
}

export default Home