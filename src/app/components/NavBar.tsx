'use client'
import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { DropDown } from './DropDown';
import Image from 'next/image';
import { NavLinks } from './NavLinks';


// const navItems = [
//     { path: '/inicio', text: 'INICIO' },
//     { path: '/emergencia', text: 'EMERGENCIA' },
//     { path: '/servicios', text: 'SERVICIOS' },
//     { path: '/contacto', text: 'CONTACTO' },
// flex bg-white justify-between items-center w-full h-[90px] mx-auto text-lg
// ]

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const closeMobilmenu = () => setIsOpen(false);
    const onMouseEnter = () => setDropdown(window.innerWidth >= 960)
    const onMouseLeave = () => setDropdown(false)  //cambiar a falso
    return (
        <>
            <nav className='bg-white'>
                <div className='flex items-center font-medium justify-around text-xl'>
                <div className='z-50 p-5 md:p-1 md:w-auto w-full flex justify-between'>
                <Link className='' href='/'>
                    <Image src='/logo-vm.png' alt='logo' height={250} width={300} />
                </Link>
                </div>
            {/* <div className={`absolute sm:static bg-white sm:bg-blue-300 min-h-[45vh] left-0 w-full flex items-center justify-center px-5 sm:min-h-fit sm:w-auto ${isOpen === true ? 'top-[12%]' : 'top-[-100%]'}`}>
                <ul
                    className='flex flex-col items-center  sm:flex-row sm:items-center gap-8 sm:gap-[4vw] '
                    onClick={() => { }}>
                        <li 
                            className='flex items-center h-20'>
                            <Link
                                href='#'
                                className=' text-black no-underline px-4 py-2 mt-8 hover:bg-blue-500 hover:border hover:border-blue-500 '>
                                    INICIO
                            </Link>
                            
                        </li>
                        <li 
                            className='flex items-center h-20'>
                            <Link
                                href='#'
                                className=' text-black no-underline px-4 py-2 mt-8 hover:bg-blue-500 hover:border hover:border-blue-500'>
                                    EMERGENCIAS
                            </Link>
                            
                        </li>
                        <li 
                            className='flex items-center h-20'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <Link
                                href='#'
                                className=' text-black no-underline px-4 py-2 mt-8 hover:bg-blue-500 hover:border hover:border-blue-500'>
                                    SERVICIOS
                            </Link>
                            {dropdown && <DropDown/>}
                        </li>
                        <li 
                            className='flex items-center h-20'>
                            <Link
                                href='#'
                                className=' text-black no-underline px-4 py-2 mt-8 hover:bg-blue-500 hover:border hover:border-blue-500 '>
                                    CONTACTO
                            </Link>
                        </li>
                </ul>
                </div> */}
                <ul className='md:flex hidden items-center gap-8 px-3'>
                    <li><Link href={''} className='py-7 px-3 inline-block'>INICIO</Link></li>
                    <NavLinks/>
                </ul>

                <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${isOpen ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              INICIO
            </Link>
          </li>
          <NavLinks />
          {/* <div className="py-5">
            <Button />
          </div> */}
        </ul>

                <div
                    className='sm:hidden text-black cursor-pointer px-4 z-50'
                    onClick={handleClick}>
                    <i>{isOpen ? <IoCloseSharp size={50} /> : <GiHamburgerMenu size={50} />}</i>
                </div>
                </div>
            </nav>
        </>
    )
}
