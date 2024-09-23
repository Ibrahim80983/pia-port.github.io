import React from "react";
import "./footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p className="socials_reach">
          Reach me on my socials:
          <span>
            <a href="#d">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://github.com/Ibrahim80983"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="https://www.instagram.com/ibrahimayanwumi" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://wa.me/2348149195661?text=Hi%20Ibrahim,%20I%20got%20your%20number%20from%20your%20portfolio,%20sure%20you%20are%20available%20for%20a%20chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </span>
        </p>
        <p className="update">© {currentYear} Pia all rights reserved</p>
      </footer>
    </div>
  );
}
