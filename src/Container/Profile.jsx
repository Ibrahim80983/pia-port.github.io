import React from 'react'
import './Profile.css'
import myPic from './images/mypicture.jpg'

export default function Profile() {
  return (
    <div className='pic_des' id='pic_des'>
        <img src={myPic} alt='my-picture'/>
        <div>
            <h1>Ayanwumi Ibrahim</h1>
            <p>"I'm Ayanwumi Ibrahim, a website developer specializing in creating
                 user-friendly websites. With 2 years of experience in web 
                 development, I focus on crafting responsive and visually appealing
                  websites that deliver seamless user experiences. My expertise
                   includes HTML, CSS, JavaScript, and modern frameworks like React.
                    I am passionate about clean code, innovative solutions, and
                     staying updated with the latest industry trends."</p>
                    <div className='button_icon'>
                        <a href='https://github.com/Ibrahim80983' target='_blank' rel="noopener noreferrer" className='button'><i class="fa-brands fa-github"></i>GitHub</a>
                        <a href= 'https://www.linkedin.com/in/ibrahim-ayanwumi-0b566026a' target="_blank" rel="noopener noreferrer" className='button'><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                        <a href='mailto:ibrahimayanwumi661@gmail.com' className='button'><i class="fa-regular fa-envelope"></i>Email</a>
                    </div>
        </div>
    </div>
  )
}
