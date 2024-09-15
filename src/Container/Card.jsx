import React from 'react'

export default function Card(props) {
  return (
    <div>
        <div className={`portfolio1 ${props.flex} `}>
      <img src={props.firstWeb} alt='webpage'/>
      <div className='firstweb_des'>
        <h1>{props.name}</h1>
        <p>{props.describe}</p>
             <a href={props.link}>{props.goto}</a>
      </div>


    </div>
    </div>
  )
}
