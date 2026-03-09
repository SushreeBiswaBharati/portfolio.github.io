import React from 'react'

const ProjectCards = (props) => {
  return (
    <div className=" projectCard bg-[#2c3147] rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-300 transition-all duration-300">
        <span className="w-full object-cover">{props.image} </span>

        <div className="p-5 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-5">
            {props.name}</h3>
            
            <span className='text-neutral-200'>{props.tools}</span>

            <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed text-justify">{props.desc}</p>
        </div>

    </div>
  )
}

export default ProjectCards