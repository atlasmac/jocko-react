import React from 'react'
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import ContactForm from './ContactForm'

const ContactPage = () => {


  return (
    <section className='contactPage' id='contact'>

      <div className='contact'>
        <div className='contactDiv'>
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <a href="mailto: jockoboards@gmail.com">
                <div className='contact-icons'>
                  <AiOutlineMail />Jockoboards@gmail.com
                </div>
              </a>
            </li>
            <li>
              <a href="tel:4065294442">
                <div className='contact-icons'>
                  <FaPhoneAlt />(406) 529-4442
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jockoboards/">
                <div className='contact-icons'>
                  <FaInstagram />
                  @jockoboards
                </div>
              </a>
            </li>
          </ul>
        </div>

        <ContactForm />

      </div>
    </section>
  )
}

export default ContactPage
