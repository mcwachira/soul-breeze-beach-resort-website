import React from "react"
import "@fontsource/poppins"

import Navbar from "./Navbar"


import Facilities from "./Facilities"
import Friends from "./Friends"

import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = () => {
  return (
    <div>
      <Navbar />


      <Facilities />
      <Friends />

      <Footer />
    </div>
  )
}

export default Layout
