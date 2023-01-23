import React from 'react'
import "./Contact.css"
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'

const Contact = () => {

  const formRef = useRef();
  console.log("formRef is == ", formRef)

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    //it prevents from refreshing page.
    e.preventDefault();
    emailjs.sendForm('service_s8k2dfu', 'template_iwenelp', formRef.current, 'dyj2qgYB0UMaSl56b')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
        setDone(false)
      });
}

return (
  <div className='contact'>
    <div className='c-bg'></div>
    <div className='c-wrapper'>
      <div className="c-left">
        <h1 className="c-title">Let's Discuss your project.</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src={Phone} alt="phone" className="c-icon" />+917014477372
          </div>
          <div className="c-info-item">
            <img src={Email} alt="email" className="c-icon" />jitendrasuthar995@gmail.com
          </div>
          <div className="c-info-item">
            <img src={Address} alt="address" className="c-icon" />Kudi Bhagtasni, Jodhpur, Rajasthan, 342005
          </div>
        </div>
      </div>
      {/* add form in below div */}
      <div className="c-right">
        <p className='c-desc'>
          <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && <p>Thank you</p>}
        </form>
      </div>
    </div>
  </div>
)
}

export default Contact