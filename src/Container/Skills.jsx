import React from 'react'
import Skill from './Skill.jsx'

export default function Skills() {
  return (
    <div className='compound' id='compound'>
        <h1 className='alone' style={{textAlign:"center", fontFamily:'"Raleway", sans-serif ', marginBottom: "3rem"}}>Skills</h1>
    <div className='skills' id="skills">
        <Skill 
        title="Technical Skills"
        des="Proficient in front-end web development, including vanilla
         coding with React, HTML, CSS and JavaScript. Adept
           at responsive design, version control with Git, and deploying websites on 
           cloud platforms. Also, an electrical engineer with a solid foundation in 
           circuit design and embedded systems."
        />
        <Skill
        title="Soft Skills"
        des="Strong problem-solving abilities with a keen attention to
         detail. Excellent communication and teamwork skills, thriving 
         in collaborative environments. Adaptable and quick to learn new
          technologies, with a proactive approach to challenges. Committed 
          to continuous improvement and delivering high-quality results."
         />
         </div>

    </div>
  )
}
