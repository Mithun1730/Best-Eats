import React, { useState } from 'react'
import {FaEllipsisV} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import {FaWallet} from 'react-icons/fa'
import {FaHandsHelping} from 'react-icons/fa'
import {FaTags} from 'react-icons/fa'
import {FaFire} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'

const Navbar = () => {
    const[nav,setNav] = useState(false)
  return (
    <div className='max-w[1640px] mx-auto flex items-center p-4'>
    <div className='flex items-center'>
        <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
           <FaEllipsisV size={20}/> 
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
    </div>
    <div className='flex gap-2 bg-gray-200 items-center rounded-full ml-5 hidden lg:flex'>
    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
    <p className='p-2'>Picks</p>
    </div>
    {/* Search Bar */}
    <div className='bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:[500px] ml-5'>
        <FaSearch size={20}/>
        <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search foods' />
    </div>
    <button className=' hidden md:flex  bg-black items-center gap-2 text-white rounded-full px-3 py-2 ml-5'>
        <FaCartPlus size={20}/> 
        <p className='font-bold'>Cart</p>
    </button>

    {/* Mobile Menu */}

    {/* Overlay */}

    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-500'></div> : ''}
    
    {/* Side-Drawer Menu */}


    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'}>
        <FaTimes size={20} onClick={()=>setNav(!nav)} className='absolute right-4 top-5 cursor-pointer'/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 gap-2 flex'><FaTruck size={20}/>Orders</li>
                <li className='text-xl py-4 gap-2 flex'><FaHeart size={20}/>Favorites</li>
                <li className='text-xl py-4 gap-2 flex'><FaWallet size={20}/>Wallet</li>
                <li className='text-xl py-4 gap-2 flex'><FaHandsHelping size={20}/>Help</li>
                <li className='text-xl py-4 gap-2 flex'><FaTags size={20}/>Promotions</li>
                <li className='text-xl py-4 gap-2 flex'><FaFire size={20}/>Best Ones</li>
                <li className='text-xl py-4 gap-2 flex'><FaUserPlus size={20}/>Invite Friends</li>
            </ul>
        </nav>
    </div>
    </div>
    
  )
}

export default Navbar