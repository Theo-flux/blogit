import React from 'react'
import { Navbar, Footer } from '../components'
import { Section, Div } from '../shared'


export default function Layout({ children }) {
  return (
    <Section>
      <Div>
        <div className='w-[100%] h-screen relative md:flex md:flex-row md:justify-start md:items-start'>
           {children}
        </div>
      </Div>
    </Section>
  )
}
