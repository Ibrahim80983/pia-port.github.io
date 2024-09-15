import React from 'react'
import './Skill.css'
export default function Skill(props) {
  return (
    <div className='skills_des'>
        <h1>{props.title}</h1>
        <p>{props.des}</p>
    </div>
  )
}
