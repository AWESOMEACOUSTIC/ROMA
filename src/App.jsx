import React from 'react'
import Button from './components/Button'
import Navigation from './components/Navigation'
import HeroImage from './sections/HeroImage'
import DefineUs from './sections/DefineUs'
import Stories from './sections/Stories'
import Footer from './sections/Footer'
import Carousel from './sections/Carousel'
import Intro from './sections/Intro'

function App() {
  return (
    <div>
      <Intro />
      <Carousel />
      <DefineUs />
      <Stories />
      {/* <HeroImage /> */}
      {/* <Navigation /> */}
      <Footer />
    </div>
  )
}

export default App