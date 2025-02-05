import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { motion, AnimatePresence } from 'framer-motion'

const TestimonialSlider = ({ slider, info, sliderHandler, stopTimer }) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className={`slider-container bg-${slider}`}
        key={slider}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <div className='testimonial-container'>
          <div className={`social-image person-${slider}`}></div>
          <div className='info-container'>
            <div className='testimonial-text'>
              <h4>{info.review}</h4>
            </div>
            <div className='testimonial-person'>
              <p className='name'>{info.name}</p>
              <p className='job-title'>{info.company}</p>
            </div>
            <div className='logo-section'>
              <IconButton
                onClick={() => {
                  sliderHandler(-1)
                  stopTimer()
                }}>
                <ChevronLeftIcon className='slider-button' fontSize='large' />
              </IconButton>
              <img
                className='company-logo'
                src={info.logo}
                alt='company-logo'
              />
              <IconButton
                onClick={() => {
                  sliderHandler(1)
                  stopTimer()
                }}>
                <ChevronRightIcon className='slider-button' fontSize='large' />
              </IconButton>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default TestimonialSlider
