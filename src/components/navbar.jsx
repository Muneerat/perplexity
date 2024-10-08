import React from 'react'
import { Discover } from '../assets/Icon'

export const Navbar = () => {
  return (
    <div className='max-w-7xl w-full  mx-auto'>
        <div className='mx-16 w-full text-[#13343b] flex justify-start items-center gap-2 py-5'>
        <Discover width={40} height={40} />
        Discover
        {/* <div className='w-full h-0.5 bg-[#d3d3ce]'></div> */}
    </div>
    </div>
   
  )
}
