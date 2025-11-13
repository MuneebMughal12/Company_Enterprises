import React from 'react'
import Herosection from '../Components/Herosection.jsx'
import Counterform from '../Components/Counterform.jsx'
import ShowcasePage from '../Components/ShowcasePage.jsx'
import Why_us from '../Components/Why_us.jsx'
import Services from '../Components/Services.jsx'
import ValueAdd from '../Components/ValueAdd.jsx'

export const Home = () => {
  return (

    <>
  <Herosection/>
  <Counterform/>
  <Services/>
  <ValueAdd/>
  <ShowcasePage/>
  <Why_us/>
    </>
  )
}
