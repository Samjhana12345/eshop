import React from 'react'
import Nav from './component/Nav'
import Banner from './component/Banner'
import Section from './component/Section'
import Footer from './component/Footer'
import Fetch_api_data from './component/Fetch_api_data'

function App() {
    return (
        <>
           <Nav/>
           <Banner/>
           <Section/>
           <Footer/> 
           <Fetch_api_data/>                
          </>
    )
}

export default App