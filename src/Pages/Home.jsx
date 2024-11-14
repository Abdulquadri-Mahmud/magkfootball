import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import Section1 from '../Components/sections/Section1'
import Section2 from '../Components/section2/Section2'
import BetsSection from '../Components/betsSection/BetsSection'
import Gadget from '../Components/Gadget'

export default function Home() {
  return (
    <div className=''>
        <Hero/>
        <Section2/>
        <BetsSection/>
        <Section1/>
        <Gadget/>
    </div>
  )
}