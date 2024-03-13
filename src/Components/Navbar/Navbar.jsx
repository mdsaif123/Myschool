import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';
import logo from "../../assets/logo.png"
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

    const [sticky,setsticky]=useState(false)

    useEffect(()=>{
       window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setsticky(true):setsticky(false)
       })
    },[])


     const [mobileMenu,setMobileMune]=useState(false)
    const toggleMenu=()=>{
   mobileMenu?setMobileMune(false):setMobileMune(true)
    }

  return (
    <nav className={`container ${sticky?"dark-nav":""}`}>
        <img src={logo} className='logo' alt="" />
        <ul className={mobileMenu?"":"hide-mobile-menu"}>
            <li> <Link to="hero" smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li> <Link to="programs" smooth={true} offset={-240} duration={500}>Program</Link></li>
            <li>  <Link to="about" smooth={true} offset={-140} duration={500}>About Us</Link></li>
            <li>  <Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li>  <Link to="testimonial" smooth={true} offset={0} duration={500}>Testimonial</Link></li>
            <li>  <Link to="contact" smooth={true} offset={0} duration={500} className="btn">Conatct Us</Link> </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
