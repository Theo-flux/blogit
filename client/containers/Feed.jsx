import React from 'react'
import { Navbar } from '../components'

export default function Feed({activeSection, handleOpenSidebar}) {

  return (
    <main className='w-[100%] absolute right-0 md:w-[75%] h-screen border-l'>
        <div className='fixed w-[100%] md:w-[75%] lg:w-[766px]'>
          <Navbar handleOpenSidebar={handleOpenSidebar} activeSection={activeSection}/>
        </div>

        <div className='pt-12 px-4 border-b w-[100%]'>
          
        </div>
    </main>
  )
}

