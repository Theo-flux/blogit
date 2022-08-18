import { useState, useEffect } from 'react'
import {useSessionStorage} from '../hooks'
import { Feed, Layout, Sidebar } from '../containers'

export default function Home() {
  const [value, setValue] = useSessionStorage("activesection" , "Home")
  const [openSidebar, setOpenSidebar] = useState(false)

  function handleOpenSidebar(){
    setOpenSidebar(!openSidebar)
  }


  return (
    <Layout>
      <Sidebar
        openSidebar={openSidebar}
        handleOpenSidebar={handleOpenSidebar}
        activeSection={value}
        setActiveSection={setValue}
      />
      <Feed
        handleOpenSidebar={handleOpenSidebar} 
        activeSection={value}/>
    </Layout>
  )
}