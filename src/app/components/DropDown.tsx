'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const menuItems = [
    { path: '/covid', title: 'Covid-19' },
    { path: '/cardiaco', title: 'Cardiologia' },
    { path: '/Geratria', title: 'Geratria' },
]

export const DropDown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <ul onClick={handleClick} className={click ? 'hidden' : 'bg-red-500 w-[200px] absolute top-20 list-none text-start'}>
                {menuItems.map(item =>
                    <li key={item.path} className='bg-blue-500 cursor-pointer hover:bg-blue-300'>
                        <Link
                            href={item.path}
                            className='block h-full w-full text-white text-decoration-none p-16'
                            onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                        
                    </li>
                )}
            </ul>
        </>
    )
}
