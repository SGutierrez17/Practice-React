import React from 'react'

import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <h2>Page of Contact</h2>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}
