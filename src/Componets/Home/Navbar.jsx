import React from 'react'
import { MdPersonOutline } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
    <nav>
        <div className='container m-auto flex justify-between items-center py-[30px]'>
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <ul className='flex justify-center gap-[75px] text-base font-medium font-poppins text-[#000000]'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className='flex gap-11'>
            <a href="#"><MdPersonOutline className='w-7 h-7'/></a>
            <a href="#"><IoSearchOutline className='w-7 h-7'/></a>
            <a href="#"><FaRegHeart className='w-7 h-7'/></a>
            <a href="#"><HiOutlineShoppingCart className='w-7 h-7'/></a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar



