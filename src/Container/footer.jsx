import React from 'react'
import './footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <div className='footer'>
        <footer>
            <p className='socials_reach'>Reach me on my socials: 
                <span>
                    <a href='#d'><i class="fa-brands fa-facebook"></i></a>
                    <a href='#sl'><i class="fa-brands fa-square-github"></i></a>
                    <a href='#sm'><i class="fa-brands fa-square-instagram"></i></a>
                    <a href='#si'><i class="fa-brands fa-whatsapp"></i></a>
                </span>
            </p>
            <p className='update'>© {currentYear} Ayanwumi Ibrahim</p>
                
        </footer>
    </div>
  )
}
