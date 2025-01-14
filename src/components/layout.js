/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import { AudioProvider } from "../context/AudioContext"
import Testimonials from './Testimonials'

const Layout = ({ children }) => {
  return (
    <AudioProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Testimonials />
        <Footer />
      </div>
    </AudioProvider>
  )
}

export default Layout
