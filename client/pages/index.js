import { useState } from 'react'
import { Feed, Layout, Sidebar } from '../containers'

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home")
  const [openSidebar, setOpenSidebar] = useState(false)

  function handleOpenSidebar(){
    setOpenSidebar(!openSidebar)
  }

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