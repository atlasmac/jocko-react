import React from 'react';
import logo from '../images/JockoWhite.png'
// import {GiHamburgerMenu} from 'react-icons/gi'
import { HashLink } from 'react-router-hash-link';




const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = React.useState(false);

  function handleScroll() {
    window.scrollY > 1 ? setIsHeaderActive(true) : setIsHeaderActive(false);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`main-header ${isHeaderActive ? 'sticky' : ''}`}>
      <HashLink to='/#home' smooth>
        <img src={logo} alt="logo" className="brand-logo-name-img" />
      </HashLink>
      <nav className='main-nav'>
        <ul>
          {/* <li className='dropdown'>
              <button className='link hamburger'>
                <GiHamburgerMenu />
              </button>
              <div className='dropdown-menu'>
                <div className='dropdown-links'>
                  <a href='/'>Home</a>
                  <a href='/'>Gallery</a>
                  <a href='/'>About</a>
                  <a href='/'>Contact</a>
                </div>
              </div>
          </li> */}
          <li>
            <HashLink to="/#gallery" smooth>
              Gallery
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contact" smooth>
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
