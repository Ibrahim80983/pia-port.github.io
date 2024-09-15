import React, {useState} from 'react'
import './Contact.css'

  export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Ensure the mailto link is correctly formatted
      const mailtoLink = `mailto:ibrahimayanwumi661@gmail.com?subject=${encodeURIComponent(
        'Message from ' + name
      )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
        email
      )}%0AMessage: ${encodeURIComponent(message)}`;
  
      window.location.href = mailtoLink;
    };
  
  return (
    <div className='Contact' id='contact'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
            <div className='input_collection' >
            <div>
                <label htmlFor='name'>Name</label><br></br><br></br>
                <input type="text" placeholder='Your name' value={name} onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
            </div>
            <div>
                <label htmlFor='email'>Email</label><br></br><br></br>
                <input type='email' placeholder='Your email address' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
            </div>
            </div>

                
            
            <label htmlFor="message">Message</label><br></br><br></br>
            <textarea placeholder='Your message'value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </form>
        <button type="submit" className='button'>Send Email</button>    </div>
  )
}
