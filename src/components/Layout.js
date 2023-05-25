import React, { Component } from "react"
import "@fontsource/poppins"
import CookieConsent from 'react-cookie-consent';
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

<CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics">
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
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

