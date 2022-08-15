import { useState, useEffect } from 'react'
import { Feed, Layout, Sidebar } from '../containers'

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home")
  const [openSidebar, setOpenSidebar] = useState(false)

  function handleOpenSidebar(){
    setOpenSidebar(!openSidebar)
  }

  useEffect(() => {
    const data = window.localStorage.getItem('active');
    if ( data !== null ) setActiveSection(JSON.parse(data));
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("active", JSON.stringify(activeSection))
  }, [activeSection])

  return (
    <Layout>
      <Sidebar
        openSidebar={openSidebar}
        handleOpenSidebar={handleOpenSidebar}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Feed
        handleOpenSidebar={handleOpenSidebar} 
        activeSection={activeSection}/>
    </Layout>
  )
}