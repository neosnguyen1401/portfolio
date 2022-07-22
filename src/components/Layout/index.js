import './index.scss'
import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Sidebar />

      <div className='page'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout