import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import { CiSearch } from "react-icons/ci";
import logo from '../../assets/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";


import { FaRegHeart } from "react-icons/fa";



const Header = () => {
    return (
        <>
            <div className='Header container'>
                <div className="header__body">
                    <div className='header__logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='header__search items-center px-[20px]'>
                        <div className='option'>
                            <select className='select' name="" id="">
                                <option className='border-none' value="">All Categories</option>
                            </select>
                        </div>
                        <div className='flex items-center w-[70%]'>
                            <input className='w-[100%] outline-none ' type="text" placeholder='Search for items...' />
                            <CiSearch className='text-[rgb(131,131,131)] w-[50px]' />
                        </div>
                    </div>
                    <div>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/Admin"}>Admin</Link>

                    </div>
                    <div className='location'>
                        <IoLocationOutline className='text-[rgb(182,182,182)]' />
                        <select name="" id="">
                            <option value="">
                                My location
                            </option>
                            <option value="">
                                Your location
                            </option>
                        </select>
                    </div>
                    <div className='icons'>
                        <div className='icon'>
                            <FaRegHeart className='h-' />
                            <p>Wishlist</p>
                        </div>
                        <div className='icon'>
                            <BsCart3 />

                            <p>Cart</p>
                        </div>
                        <div className='icon'>
                            <RiUser3Line />

                            <p>Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
