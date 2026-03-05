import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Academyprocesssec from '../components/Academyprocesssec'
import Cardmap from '../components/Cardmap'
import GetAbout from '../components/GetAbout'

import Facilitymap from '../components/Facilitymap'
import TeamMap from '../components/TeamMap'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Academyprocesssec/>
      <Cardmap/>
      <GetAbout/>
      <Facilitymap/>
      <TeamMap/>
    </div>
  )
}

export default Home
