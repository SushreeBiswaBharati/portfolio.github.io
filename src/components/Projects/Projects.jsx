import React from 'react'
import ProjectCards from './ProjectCards';
import lost from '../../assets/images/LostFound.png'
import book from '../../assets/images/Book.png'
import green from '../../assets/images/green.png'

const Projects = () => {

    const projects = [
        {
            image: <img src={lost} alt="LostFound" />,
            name: "Lost & Found System", 
            tools: "Java Swing, JDBC & MySQL",
            desc: "This is a Java-based desktop application designed to help users report lost items, claim found items, and manage records efficiently. The system provides separate interfaces for users and administrators, ensuring smooth interaction between individuals who have lost items and those who have found them."
        },

        {
            image: <img src={book} alt="BookVerse" />,
            name: "BookVerse", 
            tools: "HTML, CSS, Bootstrap, PHP, JS & MySQL",
            desc: "This is a  is a web-based application designed to simplify the process of browsing, reading, and managing books from any location at any time. BookVerse serves as a gateway to unlimited stories, offering everything from bestsellers and classics to hidden gems. The platform combines a clean, modern interface with powerful search capabilities, making it easy for readers to discover and enjoy their next favorite book. "
        },

        {
            image: <img src={green} alt="Green LifeStyle" />,
            name: "Green LifeStyle", 
            tools: "HTML, CSS, Bootstrap, PHP, JS & MySQL",
            desc: "This is a  is a web-based application designed to simplify the process of exploring, purchasing, and managing eco-friendly products from anywhere at any time. Green LifeStyle serves as a complete digital marketplace for plants, seeds, fresh produce, gardening tools, and sustainable living essentials. The platform combines a clean, modern, and responsive interface with powerful search and product management capabilities, making it easy for users to discover, select, and order high-quality green products effortlessly."
        },


    ];

  return (
    <div id='Projects' className="text-white w-full p-15 md:p-20">
        <h2 className='text-2xl md:text-4xl font-bold md:text-center'>Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white pt-8">
          {projects.map((elem, idx) => (
            <ProjectCards
              key={idx}
              image={elem.image}
              name={elem.name}
              tools={elem.tools}
              desc={elem.desc}
            />
          ))}
        </div>
      </div>
  )
}

export default Projects