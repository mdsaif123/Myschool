import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about' id="about1">
      <div className="about-left">
        <img src={about_img} className='about-img' alt="" />
        <img src={play_icon} className='play-icon' alt="" onClick={()=>{
          setPlayState(true)
        }} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sunt.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae perferendis, excepturi debitis corporis assumenda beatae officiis sequi similique repellat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde consectetur aspernatur sequi labore nostrum nulla iste quibusdam veniam reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque itaque sint obcaecati unde rem fugit eos rerum ipsum sapiente at!</p>
      </div>
    </div>
  )
}

export default About
