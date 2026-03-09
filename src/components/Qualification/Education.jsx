import React from 'react'
import EducationCards from './EducationCards';
const Education = () => {

  const Education = [
    
    { name: "BSE, Odisha", standard: "10th", score: "72%" },
    { name: "CHSE, Odisha", standard: "12th", score: "73%" },
    { name: "Bachlors", standard: "Computer Science", score: "8.66 cgpa" },
    { name: "Masters", standard: "Computer Application", score: "8.16 cgpa" },
  ];

  return (
    <div id='Education' className="text-white w-full p-15 md:p-20 hover:shadow-blue-300">
        <h2 className='text-2xl md:text-4xl font-bold md:text-center '>Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {Education.map((elem, idx) => (
            <EducationCards 
              key={idx}
              name={elem.name}
              standard={elem.standard}
              score={elem.score}
              />
          ))}
        </div>
      </div>
  )
}

export default Education