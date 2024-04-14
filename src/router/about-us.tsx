import React from 'react'

import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
        <h2>Page of About Us</h2>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
