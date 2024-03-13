import React from 'react';
import "./Conatct.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a3b1d7a5-bb75-48f5-81aa-df8e906270fe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred while submitting the form.");
    }
  };

  return (
    <div className='contact' id='contact1'>
      <div className="contact-col">
        <h3>Send us messages <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquam consequuntur. Illo odio libero asperiores, corrupti dolorum deserunt itaque, quod excepturi eaque vel impedit expedita soluta inventore placeat tempora iusto saepe incidunt est vitae harum?</p>
        <ul className='address'>
          <li><img src={mail_icon} alt="" />Conatct@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 454 2154 515</li>
          <li><img src={location_icon} alt="" /> Mumbai Maharstara worli</li> <br />
         
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
  
          <input type="text" name="name" placeholder='Name' required />
  
          <input type="tel" name='phone' placeholder='Enter Your Mobile No' required />
         
          <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
          <button type='submit' className='btn dark-btn contact-btn'>Submit Now &rarr;</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact;
