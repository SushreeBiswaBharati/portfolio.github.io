import React from 'react'

const EducationCards = (props) => {
  return (
    <div className='card'>
        <div className="top">
            <h2 className='pb-4 font-semibold text-2xl'>{props.name}</h2>
        </div>
        <div className="buttom flex flex-col text-xl">
            <span>{props.standard}</span>
            <span>{props.score}</span>
        </div>
    </div>
  )
}

export default EducationCards