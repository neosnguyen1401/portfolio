import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { AiFillHome, AiFillFolder } from 'react-icons/ai'
import { FaUserAlt, FaPaperPlane, FaDiscord } from 'react-icons/fa'
import { BsGithub, BsFacebook, BsFillFilePdfFill } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='Logo' />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <AiFillHome className='icon' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FaUserAlt className='icon' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                <AiFillFolder className='icon' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FaPaperPlane className='icon' />
            </NavLink>

            <a href='https://drive.google.com/drive/folders/1YwqYsH6KYlmRx-afP5NpM6fUkNXGx5WI?usp=sharing' target='_blank' rel='noreferrer' className='resume-link'>
                <BsFillFilePdfFill className='resume-icon' />
            </a>
        </nav>

        <ul>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer'
                    href='https://github.com/neosnguyen1401'
                >
                    <BsGithub className='icon' />
                </a>
            </li>

            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer'
                    href='https://www.facebook.com/neos.nguyen.1401/'
                >
                    <BsFacebook className='icon' />
                </a>
            </li>

            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://discordapp.com/users/Neos#5087/'
                >
                    <FaDiscord className='icon' />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar