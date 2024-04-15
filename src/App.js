import React from 'react';
import { FaAddressBook, FaFacebook, FaGlobe, FaInstagram, FaMap, FaReact } from 'react-icons/fa';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Human Rights Commission Sierra Leone Portal</h2>
        <h5>"Making Rights Real"</h5>
        <h3>Useful Links:</h3>
        <ul>
          <li>
            <a href="https://www.hrc-sl.org/" target='_blank' rel="noreferrer">
              <FaGlobe />
              <span> Human Rights Commission Website</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/HRCSL?mibextid=LQQJ4d" target='_blank' rel="noreferrer">
              <FaFacebook />
              <span> Facebook Page</span>
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/1LpLbhHRQ6y9BqY59?g_st=iw" target='_blank' rel="noreferrer">
              <FaMap />
              <span> Complaints Office Google Map</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hrcsl2004/" target='_blank' rel="noreferrer">
              <FaInstagram />
              <span> Our Instagram</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
