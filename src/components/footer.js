import { Link } from "gatsby"
import React from "react"

import logo from "../images/3D-liquid-abstract-5.webp"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-3 xxs:grid-cols-1 lg:grid-cols-3">
            <div>
              <span className="text-white font-semibold text-3xl">
                Northern Voice Reels
              </span>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Professional voiceover services<br></br>
                and bespoke voice reel<br></br>
                production in Manchester.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    Website
                  </a>

                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.peterbroadhead.co.uk/"
                  >
                    By Peter Broadhead
                  </a>
                </p>
              </div>
            </div>

            <div className="place-self-start self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium space-y-2">
                <li>
                  <Link 
                    to="/about"
                    className="text-black opacity-70 hover:opacity-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services"
                    className="text-black opacity-70 hover:opacity-100"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/listen"
                    className="text-black opacity-70 hover:opacity-100"
                  >
                    Listen
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pricing"
                    className="text-black opacity-70 hover:opacity-100"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/book-now"
                    className="text-black opacity-70 hover:opacity-100"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>

            <div className="place-self-start self-center xxs:hidden lg:block">
              <h3 className="text-xl font-montserrat font-bold mb-4">Contact Us</h3>
              <ul className="text-base font-montserrat">
                <li className="mb-2">
                  <a href="tel:+447973818298" className="hover:opacity-70">
                    +44 7973 818 298
                  </a>
                </li>
                <li className="mb-2">
                  <a href="mailto:nvr@watershed.uk.com" className="hover:opacity-70">
                    nvr@watershed.uk.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
