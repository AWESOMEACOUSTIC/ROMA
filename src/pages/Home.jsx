import DefineUs from '../sections/DefineUs'
import Navigation from '../components/Navigation'
import Stories from '../sections/Stories'
import Footer from '../sections/Footer'
import Carousel from '../sections/Carousel'
import Intro from '../sections/Intro'
import HeroImage from '../sections/HeroImage'
import BannerImage from '../sections/BannerImage'

function Home() {
  return (
    <div>
      <Navigation />
      <HeroImage />
      <DefineUs />
      <Stories />
      <Intro />
      <Carousel />
      <BannerImage />
      <Footer />
    </div>
  )
}

export default Home