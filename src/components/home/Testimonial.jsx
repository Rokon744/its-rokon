import React from 'react'
import ReviewSlider from './ReviewSlider';

const Testimonial = () => {
  return (
    <section className='testimonials pt-28' id='testimonial'>
      <div className="container">
        <h1 data-aos="fade-up" className={`text-3xl md:text-5xl text-center header-text font-semibold tracking-wider`}>
          Testimonial
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-2xl header-text text-center mt-5 mb-0 max-w-[1000px] mx-auto">
          What client say 
        </p>
        <div data-aos="fade-up" data-aos-delay="500" className="testimonial-slider py-10 max-w-[700px] m-auto">
          <ReviewSlider />
        </div>
      </div>
    </section>
  )
}

export default Testimonial