import React, { Component } from "react"
import "@fontsource/poppins"
// import  from './css/Layout.css'
import Navbar from "./Navbar"
import Header from "./Header"
import About from "./About"
import Rooms from "./Rooms"

import Amenities from "./Amenities"
import Friends from "./Friends"
import Gallery from "./Gallery"
import Footer from "./Footer"



import "bootstrap/dist/css/bootstrap.min.css"



const Layout = () => {


  return (
    <div>
      <Navbar />

      <Header />

      <About />
      <Rooms />
      <Amenities />
      <Friends />
      <Gallery />

      <Footer />
    </div>
  )
}


export default Layout
