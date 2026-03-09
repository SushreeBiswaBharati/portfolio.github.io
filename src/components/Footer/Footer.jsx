import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
  return (
    <div id='Contacts' className=' flex justify-around bg-[#161547] text-white w-full p-15 md:p-20'>
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md;text-2xl font-normal">“Let’s build something together”</h3>
        </div>

        <ul className="text-sm md:text-xl">
          <li className='flex gap-2 items-center hover:text-blue-300'><CiMail size={20}/> <a href="">sushreebiswabharati07@gmail.com</a></li>
          <li className='flex gap-2 items-center hover:text-blue-300'><CiLinkedin size={20}/><a href="">linkedin.com/in/sushree-biswa-bharati7</a></li>
          <li className='flex gap-2 items-center hover:text-blue-300'><FaHackerrank size={20}/><a href="">hackerrank.com/profile/Biswa_Bharati02</a></li>
          <li className='flex gap-2 items-center hover:text-blue-300'><SiLeetcode size={20}/><a href="">leetcode.com/u/sushree-07/</a></li>

        </ul>
    </div>
  )
}

export default Footer