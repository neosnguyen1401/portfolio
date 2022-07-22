import './index.scss'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FaSass, FaHtml5, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>My name is Nguyen Hoang Nguyen aka Neos, I am a self-taught web developer come from Ho Chi Minh city. Since the first time I learned Pascal in high school, I've always been passionate about coding and problem solving.</p>
            <p>I have extensive knowledge of <span>HTML, CSS, JavaScript, Reactjs, Tailwind CSS and SASS</span>. Combined with my communication and problem-solving skills, I think I would be an excellent candidate for the Frontend Web Developer role at your Company.</p>
            <p>I'm also confident to say that I'm a quick learner and I am constantly seeking out new technologies and staying up-to-date on trends in the industry. Let me help you build the future.</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FaSass />
            </div>

            <div className='face2'>
              <FaHtml5 />
            </div>

            <div className='face3'>
              <SiTailwindcss />
            </div>

            <div className='face4'>
              <FaReact />
            </div>

            <div className='face5'>
              <SiJavascript />
            </div>

            <div className='face6'>
              <FaGitAlt />
            </div>
          </div>
        </div>
    </div>

    <Loader type='pacman' />
    </>
  )
}

export default About