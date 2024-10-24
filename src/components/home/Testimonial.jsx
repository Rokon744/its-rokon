import React from 'react'
import ReviewSlider from './ReviewSlider';

const Testimonial = () => {
  return (
    <section className='testimonials'>
      <div className="container">
        <h1 className={`text-3xl md:text-5xl text-center header-text font-semibold tracking-wider`}>
          Testimonial
        </h1>
        <p className="text-2xl header-text text-center mt-5 mb-0 max-w-[1000px] mx-auto">
          What client say 
        </p>
        <div className="testimonial-slider py-20 max-w-[500px] m-auto">
          <ReviewSlider />
        </div>
      </div>
    </section>
  )
}

export default Testimonial