import './index.scss'
import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qo7w4qk',
        'template_at7idrl',
        refForm.current,
        'tSslBBa5SU_j04pwd'
      )

      .then(
        () => {
            alert('Message Successfully Sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['L', 'e', 't', "'", 's', ' ', 'g', 'e', 't', ' ', 'i', 'n', ' ', 't', 'o', 'u', 'c', 'h']}
                        idx={15}
                    />
                </h1>

                <p>
                    Thank you for your time and consideration. I look forward to speaking with you soon.
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>

                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>

                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>

                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>

                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className='map-wrap'>
                <MapContainer center={[10.792312, 106.646968]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[10.792312, 106.646968]}>
                        <Popup>I'm live here, come over for a cup of coffee</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        <Loader type='pacman' />
    </>
  )
}

export default Contact