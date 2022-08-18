import React from 'react'
import { Navbar } from '../components'
import Home from './Home'

export default function Feed({activeSection, handleOpenSidebar}) {

  return (
    <main className='w-[100%] absolute right-0 md:w-[75%] h-screen'>
      <div className='md:border-x'>
        <div className='fixed z-20 w-[100%] md:w-[75%] lg:w-[766px]'>
          <Navbar handleOpenSidebar={handleOpenSidebar} activeSection={activeSection}/>
        </div>

        <div className='pt-12 w-[100%]'>
          <Home/>
        </div>
      </div>
    </main>
  )
}