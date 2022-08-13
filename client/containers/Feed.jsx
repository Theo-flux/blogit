import React from 'react'
import { Navbar } from '../components'

export default function Feed({activeSection, handleOpenSidebar}) {

  return (
    <main className='w-[100%] md:w-[75%] h-screen border-x'>
        <div className='relative'>
          <Navbar handleOpenSidebar={handleOpenSidebar} activeSection={activeSection}/>
        </div>
    </main>
  )
}

