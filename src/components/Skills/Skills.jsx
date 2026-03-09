import React from 'react'
import SkillLists from './SkillLists';

const Skills = () => {

  const skills = [
    { name: "Java", level: 60 },
    { name: "C", level: 50 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 75 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 70 },
    { name: "JavaScript", level: 50 },
    { name: "PHP", level: 70 },
    { name: "Python", level: 50 },
    { name: "MySQL", level: 60 },
    { name: "React", level: 60 },
  ];

  
  return (
    <div id='Skills' className="text-white w-full p-15 md:p-20">
        <h2 className='text-2xl md:text-4xl font-bold md:text-center'>Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white pt-8">
          {skills.map((elem, idx) => (
            <SkillLists
              key={idx}
              name={elem.name}
              level={elem.level}
            />
          ))}
        </div>
      </div>
  )
}

export default Skills