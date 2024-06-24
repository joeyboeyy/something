import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <img src={props.logoSrc} loading="lazy" />
          <nav className="navbar4-links">
            <span className="navbar4-text">{props.text}</span>
          </nav>
          <div className="navbar4-buttons">
            <Link to="/playback" className="navbar4-navlink button">
              <span className="navbar4-text1">{props.text2}</span>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar4-image"
              />
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <img src={props.logoSrc} loading="lazy" className="navbar4-image11" />
          <nav className="navbar4-links1">
            <span className="navbar4-text2">{props.text}</span>
          </nav>
          <div className="navbar4-buttons1">
            <Link to="/playback" className="navbar4-navlink1 button">
              <span className="navbar4-text3">{props.text2}</span>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar4-image1 navbar4-image1"
              />
            </Link>
          </div>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <img src={props.logoSrc} loading="lazy" className="navbar4-image12" />
          <nav className="navbar4-links2">
            <span className="navbar4-text4">{props.text}</span>
          </nav>
          <div className="navbar4-buttons2">
            <Link to="/playback" className="navbar4-navlink2 button">
              <span className="navbar4-text5">{props.text2}</span>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar4-image2"
              />
            </Link>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  text2: 'Listen',
  imageSrc: '/play-button-svgrepo-com.svg',
  logoSrc: '/boey%C3%A2%C2%80%C2%99s-1500w.png',
  imageAlt: 'image',
  text: 'No subscription. No bullshit. Just the good stuff.',
  action2: 'Sign Up',
  action1: 'play-button-svgrepo-com.svg',
}

Navbar4.propTypes = {
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  logoSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
}

export default Navbar4
