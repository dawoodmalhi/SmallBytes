import React from 'react'
import logo from '../images/SmallBytesLogo.SVG'
import "../styles/NavBar.css"

class NavBar extends React.Component {
    render() {
      return (
        <div>
          <div className="navbar">
            <img src={logo} alt="Small Bytes Logo"></img>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Compressor</a>
              </li>
              <li>
                <a href="#">Decompressor</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

  export default NavBar;