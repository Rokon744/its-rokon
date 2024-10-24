import Header from '@/components/Header'
import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import Services from '@/components/home/Services'
import React from 'react'
import "../styles/styles.css"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default Home