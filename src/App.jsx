import React from 'react'
import '../Css/output.css'
import LandingPage from './Pages/LandingPage'
import Help from './Pages/Help'
import Why from './Pages/Why'
import Brands from './Pages/Brands'
import WorkUs from './Pages/WorkUs'
import WhyUs from './Pages/WhyUs'
import WhatSay from './Pages/WhatSay'
import Pricing from './Pages/Pricing'
import Popular from './Pages/Popular'
import FAQ from './Pages/FAQ'

const App = () => {
  return (
    <div className=''>
      <LandingPage/>
      <Help/>
      <Why/>
      <Brands/>
      <WorkUs/>
      <WhyUs/>
      <WhatSay/>
      <Pricing/>
      <Popular/>
      <FAQ/>
      
    </div>
  )
}

export default App
