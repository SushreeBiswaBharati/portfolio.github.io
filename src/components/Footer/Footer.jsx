import React from 'react'
import { CiMail, CiLinkedin } from "react-icons/ci";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div id='Contacts' className='flex justify-around bg-[#161547] text-white w-full p-15 md:p-20'>

      {/* Left Section */}
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          “Let’s build something together”
        </h3>
      </div>

      {/* Right Section */}
      <ul className="text-sm md:text-xl space-y-3">

        <li className='flex gap-2 items-center hover:text-blue-300'>
          <CiMail size={20}/>
          <a href="mailto:sushreebiswabharati07@gmail.com">
            sushreebiswabharati07@gmail.com
          </a>
        </li>

        <li className='flex gap-2 items-center hover:text-blue-300'>
          <CiLinkedin size={20}/>
          <a 
            href="https://linkedin.com/in/sushree-biswa-bharati7" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/sushree-biswa-bharati7
          </a>
        </li>

        <li className='flex gap-2 items-center hover:text-blue-300'>
          <FaHackerrank size={20}/>
          <a 
            href="https://hackerrank.com/profile/Biswa_Bharati02"
            target="_blank"
            rel="noopener noreferrer"
          >
            hackerrank.com/profile/Biswa_Bharati02
          </a>
        </li>

        <li className='flex gap-2 items-center hover:text-blue-300'>
          <SiLeetcode size={20}/>
          <a 
            href="https://leetcode.com/u/sushree-07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/u/sushree-07/
          </a>
        </li>

      </ul>

    </div>
  )
}

export default Footer