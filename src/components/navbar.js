import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a
              className="text-black flex-shrink-0 font-montserrat font-semibold"
              href="/"
            >
              <span className="text-gradient bg-gradient-to-r from-pink to-purple font-semibold text-2xl">
                Northern Voice Reels
              </span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/listen"
                >
                  Listen
                </Link>
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/pricing"
                >
                  Pricing
                </Link>
                <div className="items-center">
                  <Link
                    to="/book-now"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out bg-purple mt-5 py-2.5 px-4 text-base font-medium text-center text-white rounded-lg border border-purple hover:text-purple hover:bg-transparent"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              id="al"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="black"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
              to="/listen"
            >
              Listen
            </Link>
            <Link
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
              to="/pricing"
            >
              Pricing
            </Link>
            <div className="mt-4">
              <Link
                to="/book-now"
                className="w-full flex items-center justify-center px-4 py-2 border border-purple rounded-md shadow-sm text-sm font-medium text-white bg-purple hover:bg-transparent hover:text-black"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
