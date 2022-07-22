import './index.scss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Avatar from '../../images/avatar.jpg'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const line1 = ['H', 'i', ',', ' ', 'I', ' ', 'a', 'm']
  const line2 = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'W', 'e', 'b']
  const line3 = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={line1}
                  idx={15}
                />
                <span id='name' className={`${letterClass} _23`}>N</span>
                <span id='name' className={`${letterClass} _24`}>e</span>
                <span id='name' className={`${letterClass} _25`}>o</span>
                <span id='name' className={`${letterClass} _26`}>s</span>
                <span className={`${letterClass} _27`}>&nbsp;</span>
                <span className={`${letterClass} _28`}>N</span>
                <span className={`${letterClass} _29`}>g</span>
                <span className={`${letterClass} _30`}>u</span>
                <span className={`${letterClass} _31`}>y</span>
                <span className={`${letterClass} _32`}>e</span>
                <span className={`${letterClass} _33`}>n</span>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={line2}
                  idx={34}
                />
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={line3}
                  idx={46}
                />
            </h1>

            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>

        <div className='avatar' id='badge-ribbon'>
          <img src={Avatar} alt='avatar' />
        </div>
    </div>

    <Loader type='pacman' />
    </>
  )
}

export default Home