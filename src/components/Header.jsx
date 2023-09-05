import React from 'react'
import NFTNexuslogo from '../assets/NFTNexus.png'

const Header = () => {
  return (
    <div className='w-4/5 flex'>
        <div>
            <img src={NFTNexuslogo} alt='logo' />
        </div>
    </div>
  )
}

export default Header