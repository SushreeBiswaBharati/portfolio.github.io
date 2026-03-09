import React from 'react'

const SkillLists = (props) => {
  return (
    <div className='mb-3'>
        <div className="flex justify-between mb-1">
            <span>{props.name}</span>
            <span>{props.level}%</span>
        </div>

        <div className="w-full h-2 bg-gray-600 rounded hover:shadow-[0_0_12px_rgba(96,165,250,0.9)]">
            <div
            className="h-2 bg-blue-200 rounded transition-all "
            style={{ width: `${props.level}%` }}
            ></div>
        </div>
    </div>
  )
}

export default SkillLists