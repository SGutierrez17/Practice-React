import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); 

  const handleClickAbout = () => {
    navigate('/about-us'); 
  };
  const handleClickContact = () => {
    navigate('/contact'); 
  };

  return (
    <div>
      <h2>Page of Home</h2>
        <nav>
          <button onClick={handleClickAbout}>About Us</button>
          <button onClick={handleClickContact}>Contact</button>
        </nav>
    </div>
  )
}
