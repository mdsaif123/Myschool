import React,{useRef} from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"

import nuser1 from "../../assets/user-1.png"
import nuser2 from "../../assets/user-2.png"
import nuser3 from "../../assets/user-3.png"
import nuser4 from "../../assets/user-4.png"

const Testomonial = () => {

    const slider=useRef()
    let tx=0;

const slideForward=()=>{
    if(tx > -50){
        tx -= 25;

    }
    slider.current.style.transform =`translateX(${tx}%)`;


}
const slideBackward=()=>{
    if(tx < 0){
        tx += 25;

    }
    slider.current.style.transform =`translateX(${tx}%)`;

}




  return (
    <div className='testimonial' id='testimonoal1'>
      <img src={next_icon} alt="" className='next-btn'  onClick={slideForward}/>

      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={nuser1} alt="" />
                        <div>
                            <h3>Virat Kohli</h3>
                            <span>Mumbai University</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum reprehenderit nihil repellendus voluptate odit, molestias dolores, aliquid nam pariatur quos adipisci recusandae voluptas saepe tempora repudiandae vel minima hic? Provident mollitia laudantium incidunt beatae?</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={nuser2} alt="" />
                        <div>
                            <h3>Virat Kohli</h3>
                            <span>Mumbai University</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum reprehenderit nihil repellendus voluptate odit, molestias dolores, aliquid nam pariatur quos adipisci recusandae voluptas saepe tempora repudiandae vel minima hic? Provident mollitia laudantium incidunt beatae?</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={nuser3} alt="" />
                        <div>
                            <h3>Virat Kohli</h3>
                            <span>Mumbai University</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum reprehenderit nihil repellendus voluptate odit, molestias dolores, aliquid nam pariatur quos adipisci recusandae voluptas saepe tempora repudiandae vel minima hic? Provident mollitia laudantium incidunt beatae?</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={nuser4} alt="" />
                        <div>
                            <h3>Virat Kohli</h3>
                            <span>Mumbai University</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum reprehenderit nihil repellendus voluptate odit, molestias dolores, aliquid nam pariatur quos adipisci recusandae voluptas saepe tempora repudiandae vel minima hic? Provident mollitia laudantium incidunt beatae?</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testomonial
