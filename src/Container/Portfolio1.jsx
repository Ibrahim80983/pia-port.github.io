import React from 'react'
import './Portfolio1.css'
import firstWeb  from'./images/firstweb.png'
import Card from './Card'
import School from './images/Screenshot 2024-09-09 130424.png'
import portfolio from './images/Screenshot 2024-09-10 064647.png'

export default function Portfolio1() {
  return (
    <div id='portfolio'>
    <Card 
    name="Blog Website"
    firstWeb={firstWeb}
    describe="A GPT-powered website designed to provide users with personalized
           content generation. The site allows users to input prompts or 
           questions, and the underlying GPT model generates detailed
            responses, ranging from creative writing to technical explanations.
             The focus was on creating a user-friendly interface with seamless 
             interaction, ensuring that users could easily navigate and utilize 
             the powerful capabilities of the GPT engine."
      link="https://new-world-x6ji.vercel.app/"
      goto="Visit Website"
    />
    <Card 
    name="School Website"
    firstWeb={School}
    describe="Developed and designed a user-friendly school website, 
    focusing on easy navigation, responsive design, and accessibility.
     Integrated features for student and parent portals, event calendars,
      and academic resources, ensuring a seamless experience for all users."
      link="https://ibrahim80983.github.io/pia.github.io/"
      goto="Visit Website"
      flex="flex-row"
    />
    <Card 
    name="Portfolio Website"
    firstWeb={portfolio}
    describe="This is a portfolio still under development, however for the sake of 
    my training completion, the idea was to add all previously completed/under-completion projects.
    updates will be made to all added project as time goes on "
      link="https://ibrahim80983.github.io/my-first-portfolio-modified/#about"
      goto="Visit Website"
    />
</div>
  )
}
