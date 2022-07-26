import React from 'react'
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>


      <div className='footer-row'>
        <div className='footerOrder'>
          <p className="copyright">JOCKO SURFBOARDS © 2022</p>
        </div>

        <div className='footerOrder'>
          <p className="copyright">
            Site by
            <a href="https://www.atlasmckinley.com" target='_blank' rel="noreferrer">
              <span className='boldName'> Atlas McKinley</span>
            </a>
          </p>
        </div>

        <div className='footerOrder'>
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


      </div>


    </footer>
  )
}

export default Footer

