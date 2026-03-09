import React from 'react'
import heroImg from '../../assets/images/home-img.png'
import resume from '../../assets/files/Sushree-cv2.pdf'

const home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-15 md:p-20'>
        <div className="md:w-2/4 md:pt-15" >
            <span className='text-blue-200 text-2xl md:text-5xl font-bold leading-normal tracking-tighter'>Hii, I am Sushree Biswa Bharati</span>
            <p className='text-m md:text-xl tracking-tight mb-3'>
                A web developer focused on building clean, responsive, and user-friendly applications. I enjoy solving real-world problems through code and continuously improving my skills by working on practical projects.
            </p>
            <div className="flex gap-4 mt-5">

              <a href="#Contacts" className="text-blue-950 py-2 px-3 md:px-4 bg-blue-300 rounded-xl shadow-xl hover:opacity-75 font-bold">Contact Me</a>

              
              <a href={resume} download className="text-blue-950 py-2 px-3 md:px-4 bg-blue-300 rounded-xl shadow-xl hover:opacity-75 font-bold">
                My Resume</a>
            </div> 
          <div/>
        </div>
        <div  className='hidden md:flex justify-center'><img className='w-3/4 h-3/4 object-cover rounded-full border-4 border-blue-300 shadow-lg ' src={heroImg} alt="My photo" /></div>
    </div>
  )
}

export default home