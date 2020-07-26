import React from 'react'
import logo from '../images/SmallBytesLogo.SVG'
import "../styles/NavBar.css"

class NavBar extends React.Component {
    render() {
      return (
        <div>
          <header class="text-gray-700 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={logo} alt="Logo" height="60" width="60" ></img>
                <span class="ml-5 text-xl">Small Bytes</span>
              </a>
              <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a href="#" class="mr-5 ">Home</a>
                <a href="#" class="mr-5 ">Compressor</a>
                <a href="#" class="mr-5 ">Decompressor</a>
              </nav>
              <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </header>
          <hr></hr>
        </div>
      );
    }
  }

  export default NavBar;