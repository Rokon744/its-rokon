import Header from '@/components/Header'
import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import Services from '@/components/home/Services'
import React from 'react'
// import 'react-awesome-button/dist/styles.css';
import "../styles/react-awesome-button.css"
import Testimonial from '@/components/home/Testimonial'
import Contact from '@/components/home/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Home