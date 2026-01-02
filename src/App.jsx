import React from 'react'
import Button from './components/Button'
import Navigation from './components/Navigation'
import HeroImage from './sections/HeroImage'
import DefineUs from './sections/DefineUs'
import Stories from './sections/Stories'
import Footer from './sections/Footer'

function App() {
  return (
    <div>
      <DefineUs />
      <Stories />
      {/* <HeroImage /> */}
      {/* <Navigation /> */}
      <Footer />
    </div>
  )
}

export default App