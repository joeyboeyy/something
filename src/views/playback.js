import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import './playback.css'

const Playback = (props) => {
  return (
    <div className="playback-container">
      <Helmet>
        <title>Playback - Togthr template</title>
        <meta property="og:title" content="Playback - Togthr template" />
      </Helmet>
      <Navbar4></Navbar4>
      <section className="playback-hero">
        <video
          loop="true"
          muted="true"
          poster="/giphy-ezgif.com-webp-to-gif-converter-1500w.gif"
          autoPlay="true"
          className="playback-video"
        ></video>
        <div className="playback-hero-content">
          <div className="playback-header-container">
            <div className="playback-header">
              <h1 id="header" className="playback-heading">
                <span>Songlist</span>
                <br></br>
              </h1>
              <h1 className="playback-subheading">
                <span>Genre: Progressive Rock</span>
                <br></br>
              </h1>
            </div>
            <div className="playback-container1">
              <div className="playback-container2">
                <Script
                  html={`<!DOCTYPE html>
<html>
<head>
  <title>Song List</title>
  <style>
    table {
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f0f0f0;
      color: black; /* Make the header text color black */
    }
    td {
      color: white; /* Make the text color white for table cells */
    }
    .audio-player {
      margin-bottom: 20px; /* Move the audio player to the top by adding margin-bottom */
      text-align: center;
    }
    /* Set background color to make text readable */
    tbody tr {
      background-color: rgba(99, 99, 99, 0.5); /* Dark background for table rows */
    }
    tbody tr:nth-child(even) {
      background-color: rgba(4, 4, 4, 0.5); /* Slightly different background for even rows */
    }
    /* Style for the play button */
    .play-button {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      padding: 5px 10px;
      cursor: pointer;
    }
    .play-button:hover {
      background-color: white;
      color: black;
    }
  </style>
</head>
<body>

  <div class="audio-player">
    <audio id="audio-player" controls>
      <source id="audio-source" src="" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <table id="song-list">
    <thead>
      <tr>
        <th>Song Name <button onclick="sortTable(0, 'asc')">▲</button><button onclick="sortTable(0, 'desc')">▼</button></th>
        <th>Artist <button onclick="sortTable(1, 'asc')">▲</button><button onclick="sortTable(1, 'desc')">▼</button></th>
        <th>Album <button onclick="sortTable(2, 'asc')">▲</button><button onclick="sortTable(2, 'desc')">▼</button></th>
        <th>Year <button onclick="sortTable(3, 'asc')">▲</button><button onclick="sortTable(3, 'desc')">▼</button></th>
        <th>Playback</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rïah Sahïltaahk</td>
        <td>Magma</td>
        <td>1000° Centigrades</td>
        <td>1971</td>
        <td><button class="play-button" onclick="playSong('magma-riahsahiltaahk')">Play</button></td>
      </tr>
      <tr>
        <td>Son of "There's No Place Like Homerton"</td>
        <td>Hatfield & the North</td>
        <td>s/t</td>
        <td>1974</td>
        <td><button class="play-button" onclick="playSong('hatfield-sonoftheresnoplacelikehomerton')">Play</button></td>
      </tr>
      <tr>
        <td>Brujo</td>
        <td>National Health</td>
        <td><b>LIVE</b> - BBC Top Gear Studios</td>
        <td>1976</td>
        <td><button class="play-button" onclick="playSong('nationalhealth-brujo-live')">Play</button></td>
      </tr>
      <tr>
        <td>One for the Vine</td>
        <td>Genesis</td>
        <td>Wind & Wuthering</td>
        <td>1976</td>
        <td><button class="play-button" onclick="playSong('genesis-oneforthevine')">Play</button></td>
      </tr>
      <tr>
        <td>I Will Be Absorbed</td>
        <td>Egg</td>
        <td>s/t</td>
        <td>1970</td>
        <td><button class="play-button" onclick="playSong('egg-iwillbeabsorbed')">Play</button></td>
      </tr>
      <tr>
        <td>Inca Roads</td>
        <td>Frank Zappa</td>
        <td>A Token of His Extreme</td>
        <td>1974</td>
        <td><button class="play-button" onclick="playSong('frankzappa-incaroads')">Play</button></td>
      </tr>
      <tr>
        <td>Driving to Amsterdam</td>
        <td>Khan</td>
        <td>Space Shanty</td>
        <td>1972</td>
        <td><button class="play-button" onclick="playSong('khan-drivingtoamsterdam')">Play</button></td>
      </tr>
    </tbody>
  </table>

  <script>
    var sortOrder = {};
    function sortTable(n, order) {
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("song-list");
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          if (order === 'asc') {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              shouldSwitch = true;
            }
          } else if (order === 'desc') {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              shouldSwitch = true;
            }
          }
        }
        if (shouldSwitch) {
          switching = true;
        }
      }
      sortOrder[n] = order === 'asc' ? 'desc' : 'asc';
    }

    function playSong(songId) {
      var audioPlayer = document.getElementById("audio-player");
      var audioSource = document.getElementById("audio-source");
      audioSource.src = \`assets/\${songId}.mp3\`;
      audioPlayer.load();
      audioPlayer.play();
    }
  </script>
</body>
</html>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="playback-hero-content1"></div>
      </section>
      <div className="playback-footer">
        <div className="playback-content">
          <div className="playback-main">
            <div className="playback-branding">
              <img
                alt="image"
                src="/boey%C3%A2%C2%80%C2%99s-200h.png"
                className="playback-image"
              />
              <span className="playback-text4">
                The plan is simple. I am going to own the music I listen to, and
                you can&apos;t do anything about it.
              </span>
            </div>
            <div className="playback-links">
              <div className="playback-column">
                <span className="playback-header1">BGMD</span>
                <div className="playback-list">
                  <Link to="/" className="playback-navlink">
                    Home
                  </Link>
                  <Link to="/playback" className="playback-navlink1">
                    Prog Rock
                  </Link>
                </div>
              </div>
              <div className="playback-column1">
                <span className="playback-header2">Boey</span>
                <div className="playback-list1">
                  <Link to="/" className="playback-navlink2">
                    Twitter
                  </Link>
                  <a
                    href="https://oc.app/community/7drqo-hyaaa-aaaar-baouq-cai"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="playback-link"
                  >
                    OpenChat
                  </a>
                </div>
              </div>
              <div className="playback-column2">
                <span className="playback-header3">Contact</span>
                <div className="playback-list2">
                  <a
                    href="mailto:lrpmc-qrvn2-qnmt7-wfles-rz74j-3qzrz-idqa2-7ai6r-y3nld-bhrid-2ae@dmail.ai?subject=BGMD"
                    className="playback-link1"
                  >
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="playback-bottom">
            <span className="playback-text5">
              © 2024 Boey - No rights reserved :/
            </span>
            <a
              href="#header"
              data-role="scroll-top"
              className="playback-link2 button"
            >
              <img alt="image" src="/arrow.svg" className="playback-image1" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="playback-container4">
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

export default Playback
