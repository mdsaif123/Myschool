import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testomonial from './Components/Testimonial/Testomonial'
import Conatct from './Components/Contact/Conatct'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle="OUR PROGRAMS" title="what we offer"/>
      <Program/>
      <About/>
      <Title subtitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subtitle="TESTIMONIAL" title="What students says"/>
      <Testomonial/>
      <Title subtitle="Contact Us" title="Get In Touch"/>
      <Conatct/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
