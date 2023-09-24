import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

import NFTNexusLogo from '../assets/NFTNexus.png';


const Header = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo w-32'>
                    <img src={NFTNexusLogo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#artworks' onClick={closeMenu}>Artworks</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#creators' onClick={closeMenu}>Creators</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#transactions' onClick={closeMenu}>Transactions</a>
                    </li>
                    <div className="text-center my-3">
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full text-white text-bold mb-2 px-1 py-2'>Connect Wallet</button>
      </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header
