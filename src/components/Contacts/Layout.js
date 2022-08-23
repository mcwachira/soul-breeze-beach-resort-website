import React from "react"
import "@fontsource/poppins"
// import  from './css/Layout.css'
import Navbar from "./Navbar"
import Header from './Header'
import Contacts from './Contacts'
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"


const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Contacts />
      <Footer />
    </div>
  )
}

export default Layout
