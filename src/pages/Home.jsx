import DefineUs from '../sections/DefineUs'
import Stories from '../sections/Stories'
import Carousel from '../sections/Carousel'
import Intro from '../sections/Intro'
import HeroImage from '../sections/HeroImage'
import BannerImage from '../sections/BannerImage'

function Home() {
  return (
    <div>
      <HeroImage />
      <DefineUs />
      <Stories />
      <Intro />
      <Carousel />
      <BannerImage />
    </div>
  )
}

export default Home