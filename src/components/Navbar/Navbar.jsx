import React from 'react'
import { useState } from 'react'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react' ;

const Navbar = () => {

    const [menu, setmenu] = useState(false);
    const [showMenu, setshowMenu] = useState(true);
  return (
    <nav className='text-white flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 border-b border-b-blue-900 shadow-xl shadow-blue-950'>
        <span className='font-bold text-xl tracking-wide'>Portfolio</span>

        <ul 
            className={`${
             menu ? "block" : "hidden" 
             }
             mx-24 mt-4 md:mt-5 font-semibold py-4 text-center  md:border-none  md:static md:flex gap-6 md:mx-0`}
        >
            
            <a href="#Education">
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:shadow-xl shadow-blue-900'>Education</li>
            </a>

            <a href="#Skills">
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:shadow-xl shadow-blue-900'>Skills</li>
            </a>

            <a href="#Projects">
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:shadow-xl shadow-blue-900'>Projects</li>
            </a>

            <a href="#Contacts">
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:shadow-xl shadow-blue-900'>Contacts</li>
            </a>
            
        </ul>
        {showMenu ? (
            <Menu
                className="md:hidden absolute right-10 top-6 transition-all duration-300"
                onClick={() => {
                setmenu(!menu);
                setshowMenu(!showMenu);
                }}
            />
            ) : (
            <X
                className="md:hidden absolute right-10 top-6 transition-all duration-300"
                onClick={() => {
                setmenu(!menu);
                setshowMenu(!showMenu);
                }}
            />
            )}
    </nav>
  );
};

export default Navbar