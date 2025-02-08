import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="cap">
        <h3>VTUFLIX</h3>
        <ul className='terms'>
          <li>Feedback</li>
          <li>License</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
        <ul>
          <li>Made with memories by</li>
          <li>Pradeep <span>&hearts;</span></li>
        </ul>
      </div>
      <div className="social"></div>
    </div>
  )
}

export default Footer
