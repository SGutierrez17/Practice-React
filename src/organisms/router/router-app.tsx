import React from 'react'

import Home from './home'
import AboutUs from './about-us'
import Contact from './contact'
import NotFound from './not-found'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import theme from '../../theme/theme'

export default function RouterApp() {
  return (
    <>
      <h1 style={{color: theme.palette.secondary.main}}>Router</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  )
}
