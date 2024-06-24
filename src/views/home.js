import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <Navbar4></Navbar4>
      <section className="home-hero">
        <video
          loop="true"
          muted="true"
          poster="/cwvl-1500h.gif"
          autoPlay="true"
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>Fuck 12</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              <span>
                Stop sending your precious money to Apple and Spotify.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Save your money by owning the music that you listen to.
              </span>
            </p>
          </div>
        </div>
        <div className="home-hero-content1">
          <div className="home-header-container1">
            <Link
              to="/playback"
              autoFocus="true"
              className="home-navlink button"
            >
              <span className="home-text07">
                <span>Take the Red Pill</span>
                <br></br>
              </span>
            </Link>
            <a
              href="https://youtu.be/93tUqf1U254"
              autoFocus="true"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              <span className="home-text10">
                <span>Take the Blue Pill</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content">
          <div className="home-main">
            <div className="home-branding">
              <img
                alt="image"
                src="/boey%C3%A2%C2%80%C2%99s-200h.png"
                className="home-image"
              />
              <span className="home-text13">
                The plan is simple. I am going to own the music I listen to, and
                you can&apos;t do anything about it.
              </span>
            </div>
            <div className="home-links">
              <div className="home-column">
                <span className="home-header1">BGMD</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink1">
                    Home
                  </Link>
                  <Link to="/playback" className="home-navlink2">
                    Prog Rock
                  </Link>
                </div>
              </div>
              <div className="home-column1">
                <span className="home-header2">Boey</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink3">
                    Twitter
                  </Link>
                  <a
                    href="https://oc.app/community/7drqo-hyaaa-aaaar-baouq-cai"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    OpenChat
                  </a>
                </div>
              </div>
              <div className="home-column2">
                <span className="home-header3">Contact</span>
                <div className="home-list2">
                  <a
                    href="mailto:lrpmc-qrvn2-qnmt7-wfles-rz74j-3qzrz-idqa2-7ai6r-y3nld-bhrid-2ae@dmail.ai?subject=BGMD"
                    className="home-link2"
                  >
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text14">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button button">
              <img alt="image" src="/arrow.svg" className="home-image1" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container2">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
