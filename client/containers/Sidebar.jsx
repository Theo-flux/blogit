import React from 'react'
import { Logo } from '../shared'

const items = [
  {
    id: 1,
    name: "Home",
    active: "ri-home-fill",
    inactive: "ri-home-line"
  },
  {
    id: 2,
    name: "Notifications",
    active: "ri-notification-4-fill",
    inactive: "ri-notification-4-line",
  },
  {
    id: 3,
    name: "Profile",
    active: "ri-account-circle-fill",
    inactive: "ri-account-circle-line"
  },
  {
    id: 4,
    name: "Settings",
    active: "ri-settings-5-fill",
    inactive: "ri-settings-5-line"
  }
]


const Capsule = ({item, setActiveSection, activeSection, handleOpenSidebar}) => {
  return(
    <div onClick={() => {
      setActiveSection(item.name)
      handleOpenSidebar()
      }
    } 
      className={`cursor-pointer flex justify-start items-start 
      py-2 px-3 mt-2 w-fit rounded-full hover:bg-gray-300 hover:text-white
      transition-all duration-300 ease-in-out
      ${activeSection === item.name && "text-black font-bold"}
      `}>
      <i className={`text-xl ${activeSection === item.name ? `${item.active}` : `${item.inactive}`} mr-2`} />
      <span className={`text-lg`}>{item.name}</span>
    </div>
  )
}

const Account = () => {
  return(
    <div className={`px-3 flex justify-start items-center`}>
      <img src="/profile-image.svg" className='w-[40px] h-[40px] border rounded-full' alt="profile image" />

      <div className='ml-2 font-poppins'>
        <p className='font-bold text-xs m-0'>Adem ilter ✨</p>
        <p className='text-xs text-darkCoolGray-400 m-0'>@ademilter</p>
      </div>
    </div>
  )
}

export default function Sidebar({activeSection, setActiveSection, openSidebar, handleOpenSidebar}) {

  return (
    <aside 
      className={`bg-white w-[70%] fixed z-50 top-0 ${openSidebar ? "left-0" : "left-[-600px]"}
      md:relative md:left-0 sm:w-[30%] md:w-[25%] h-[100%] p-2 font-poppins transition-all duration-300 ease-in-out
      `}>
      <div className='fixed h-screen w-[240px] sm:w-[200px] md:w-[170px] xl:w-[220px] grid grid-cols-1 grid-rows-[_.2fr_500px_1fr]'>
        <div className='px-1 flex justify-between'>
          <Logo/>

         <i onClick={() => handleOpenSidebar()}  className="md:hidden text-xl font-poppins font-bold ri-close-line"></i>
        </div>

        <div className='mt-8'>
          {
            items.map((item) => {
              return(
                <Capsule
                  key={item.id}
                  setActiveSection={setActiveSection}
                  activeSection={activeSection}
                  item={item}
                  handleOpenSidebar={handleOpenSidebar}
                />
              )
            })
          }
        </div>
        

        <div className=''>
          <Account/>
        </div>
      </div>
    </aside>
  )
}
