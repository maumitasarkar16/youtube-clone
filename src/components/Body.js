import React from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-flow-col'>
          <SidePanel />
          <Outlet />
      </div>
    </div>
  )
}

export default Body