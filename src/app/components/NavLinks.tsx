'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export const NavLinks = () => {
    const navLinks = [{ name: 'EMERGENCIAS' },
    {
        name: 'SERVICIOS', submenu: true, subLinks: [
            { titulo: 'Covid-19', path: '#' },
            { titulo: 'Rayos X', path: '#' },
            { titulo: 'Traslados en Ambulancia', path: '#' },]
    },
    { name: 'CONTACTO' }]

    const [click, setClick] = useState(false)
    return (
        <>
            {navLinks.map(link =>
                <div key={link.name} onClick={() => setClick(!click)}>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h2 className='py-7 flex justify-between items-center'>{link.name}{link.submenu && <span className="text-xl md:mt-1 md:ml-2 hidden md:block">
                            <i><FaChevronDown /></i>
                        </span>}{link.submenu && <span className="text-xl md:hidden inline">
                            <i>{click ? <FaChevronDown/> : <FaChevronUp />}</i>
                        </span>}

                        </h2>
                        {link.submenu &&
                            <div>
                                <div className='absolute top-[100px] hidden md:group-hover:block md:hover:block'>
                                    <div className='bg-white p-3.5'>
                                        {link.subLinks.map(subLink =>
                                            <div key={subLink.titulo}><Link href={''} className='text-lg text-gray-600 my-2.5 hover:text-blue-500'>{subLink.titulo}</Link></div>
                                        )}
                                    </div>
                                </div>
                            </div>}
                    </div>
                    {/* MENU MOBIL */}
                    <div className={`${click ? 'hidden' : 'md:hidden'}`}>
                        {link.subLinks?.map(slink =>
                            <div key={slink.titulo}>
                                <div>
                                    <h2 className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'>{slink.titulo}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
