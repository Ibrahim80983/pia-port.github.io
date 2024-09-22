import React, { useState } from "react";
import "./menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  return (
      <div id='menu' >
          

              <div className="menu-btn__burger" onClick={toggleMenu}>
                  {
                      menuOpen ?   <i class="fa-solid fa-xmark" onClick = {() => setMenuOpen(false)}></i> 
                      : <i class="fa-solid fa-bars" onClick = {() => setMenuOpen(true)}></i>
                        
                  }
                </div>


        
                <div id="dropdown-menu" style={{ width : menuOpen ? "110%" : "0%" }}>
                    <span><i class="fa-solid fa-xmark" onClick = {() => setMenuOpen(false)}></i></span>
                      <ul>

                          <li><a href="#pic_des" onClick={() => setMenuOpen(false)}><b>About</b></a></li>
                          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}><b>Portfolio</b></a></li>
                          <li><a href="#skills" onClick={() => setMenuOpen(false)}><b>Skills</b></a></li>
                          <li><a href="#contact" onClick={() => setMenuOpen(false)}><b>Contact</b></a></li>
                      </ul>
                  </div>

      </div >
  );
};

export default Menu;
