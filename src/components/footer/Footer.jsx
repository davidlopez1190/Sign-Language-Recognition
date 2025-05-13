import React from 'react'
import "./Footer.css"
import logo from "../../assests/logo.png"

const Footer = () => {
  return (
    <div className="signlang__footer section__padding">
      <div className="signlang__footer-logo">
        <img src={logo} alt="signlang_logo" />
      </div>

      <div className="signlang__footer-copyright">
        <h3>
          <span>SLR</span> &nbsp;&nbsp;|&nbsp;&nbsp; 
          <em>Bridging Silence, Digitally</em>
        </h3>
      </div>
    </div>
  )
}

export default Footer
