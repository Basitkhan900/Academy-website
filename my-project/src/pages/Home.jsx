import React from 'react'
import Navbar from '../components/layout/Navbar'
import Header from '../components/Header'
import Academyprocesssec from '../components/Academyprocesssec'
import Cardmap from '../components/Cardmap'
import GetAbout from '../components/GetAbout'

import Facilitymap from '../components/Facilitymap'
import TeamMap from '../components/TeamMap'
import ImgGallery from '../components/gallery/ImgGallery'
import Testimonialcard from '../components/testimonial/Testimonialcard'
import Blogcard from '../components/blogs&article/Blogcard'
import Herosec from '../components/Herosec'
import Footer from '../components/layout/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      
      <Academyprocesssec />
      <Cardmap />
      <GetAbout />
      <Facilitymap />
      <TeamMap />
      <ImgGallery />
      <Testimonialcard />
      <Blogcard/>
      <Herosec/>
      <Footer/>
    </div>
  )
}

export default Home
