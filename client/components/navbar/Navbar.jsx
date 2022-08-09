import React from 'react'
import {Logo, Section, Nav, ConnectButton} from '../../shared'

export default function Navbar() {
  return (
    <Section className={`shadow`}>
      <Nav>
        <div className='flex justify-between items-center'>
          <Logo/>
          <ConnectButton/>
        </div>
      </Nav>      
    </Section>
  )
}
