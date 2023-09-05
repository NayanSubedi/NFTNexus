import React from 'react'
import NFTNexuslogo from '../assets/NFTNexus.png'

const Header = () => {
  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-2.5 mx-auto '>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className='w-40 cursor-pointer' src={NFTNexuslogo} alt='logo' />
        </div>
        
        <ul className='md:flex-[0.35] text-white md:flex hidden list-none justify-between items-center flex-initial'>
            <li className='mx-4 cursor-pointer'>Market</li>
            <li className='mx-4 cursor-pointer'>Art</li>
            <li className='mx-4 cursor-pointer'>Creators</li>
            <li className='mx-4 cursor-pointer'>Features</li>
        </ul>

        <button className='shadow-s shadow-blue text-white bg-[#b90a0a] hover:bg-[#5C469C] md:text-xs p-2 rounded-full'>
            Connect Wallet
        </button>
    </div>
  )
}

export default Header