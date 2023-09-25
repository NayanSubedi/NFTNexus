import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

import NFTNexusLogo from '../assets/NFTNexus.png';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo w-32'>
                    <img src={NFTNexusLogo} alt='logo' />
                </a>
                <div className='hamburger ' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"} >
                    <li className='nav-item'>
                        <Link to='/'  className=''onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/artworks' onClick={closeMenu}>Artworks</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/creators' onClick={closeMenu}>Creators</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/transactions' onClick={closeMenu}>Transactions</Link>
                    </li>
                    <div className="text-center my-3">
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full text-white text-bold mb-2 px-1 py-2'>Connect Wallet</button>
      </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
