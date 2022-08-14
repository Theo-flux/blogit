import React from 'react'

export default function Blog({person}) {
  return (
    <div className={`border-t font-poppins relative p-4 flex justify-between items-start w-[100%]`}>
        <img src={`${person.image}`} className='w-[50px] h-[50px] border rounded-full mr-3' alt="profile image" />
        <div className='w-full'>
            <div className='flex justify-between items-start w-full'>
                <div className='flex text-sm justify-start items-start'>
                    <p className='truncate max-w-[70px] md:max-w-[150px] font-bold'>{person.name}</p>
                    <p className='truncate max-w-[70px] md:max-w-[150px] font-medium text-gray-600'>{person.username}</p>
                    <p className='text-gray-600 mr-1'>.</p>
                    <p className='font-medium text-gray-600'>8m</p>
                </div>

                <div className='self-start flex justify-center items-center'>
                    <i class="font-bold p-0 m-0 text-[#00000030] cursor-pointer ri-more-fill" />
                </div>
            </div>
            <p>
                {person.message}
            </p>
        </div>
        {/* <div className='bg-white absolute right-0 border w-[300px]'>

        </div> */}
    </div>
  )
}
