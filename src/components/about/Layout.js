import React from "react"
import "@fontsource/poppins"
// import  from './css/Layout.css'
import Navbar from "./Navbar"

import Faces from "./Faces"

import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"


const Layout = () => {
  return (
    <>
      <Navbar />

      <Faces />

      <Footer />
    </>
  )
}

export default Layout
