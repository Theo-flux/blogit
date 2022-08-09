import React from 'react'
import { Navbar, Footer } from '../components'

export default function Layout({ children }) {
  return (
    <section>
        <Navbar/>
        <div>
            {children}
        </div>
        <Footer/>
    </section>
  )
}
