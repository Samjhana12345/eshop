import React from 'react'
import Home from './page/Home'
import {Route, Routes } from 'react-router-dom'
import Contact from './page/Contact'
import Gallery from './page/Gallery'
import Download from './page/Download'
import About from './page/About'
import Page_not_found from './page/Page_not_found'
import Items_details from './page/Items_details'


function Section() {
    
  return (
    <>


<Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/contact" element={<Contact/>}/> 
    <Route path="/gallery" element={<Gallery/>}/> 
    <Route path="/download" element={<Download/>}/> 
    <Route path="/about" element={<About/>}/>  
    <Route path="/item_details/:item_id" element={<Items_details/>}/>    
    <Route path="/*" element={<Page_not_found/>}/> 
    </Routes>

    
</>
  )
}

export default Section