import Header from '@/components/Header'
import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Services />
    </div>
  )
}

export default Home