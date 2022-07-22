import './index.scss'
import React from 'react'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <div>
        {
            strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </div>
  )
}

export default AnimatedLetters