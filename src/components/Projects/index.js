import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/thumbs'
import { projectImages } from '../../images'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container projects-page'>
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
            idx={15}
          />
        </h2>
        <h3>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'r', 'e', 'c', 'e', 'n', 't', ' ', 'w', 'o', 'r', 'k', 's']}
            idx={15}
          />
        </h3>

        <Swiper
          modules={[Navigation, Thumbs]} 
          loop={true}
          spaceBetween={10}
          navigation={true} 
          grabCursor={true}
          className="slider"
        >
          {
            projectImages.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt='Slider Images' />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <p>See more at my <a target='_blank' rel='noreferrer' href='https://github.com/neosnguyen1401'>Git Hub</a></p>
      </div>

    <Loader type='pacman' />
    </>
  )
}

export default Projects