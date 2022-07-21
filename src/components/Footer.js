import React from 'react'
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
      <footer>
        

        <div className='footer-row'>
          <p className="copyright">JOCKO SURFBOARDS © 2022</p>

          <p className="copyright">
            <a href="atlasmckinley.com">Site by Atlas McKinley</a>
          </p>
          <ul className='footer-logos-ul'>
            <li>
              <a href="mailto: jockoboards@gmail.com"> <AiOutlineMail /></a>
            </li>
            <li>
              <a href="tel:4065294442"><FaPhoneAlt /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/jockoboards/"> <FaInstagram /></a>
            </li>
          </ul>
        </div>


      </footer>
  )
}

export default Footer

