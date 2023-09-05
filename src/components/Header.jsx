import React from 'react'
import NFTNexuslogo from '../assets/NFTNexus.png'

const Header = () => {
  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto '>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className='w-40 cursor-pointer' src={NFTNexuslogo} alt='logo' />
        </div>
    </div>
  )
}

export default Header