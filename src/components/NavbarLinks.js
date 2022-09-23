import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"



const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background:  #F10A55;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color:  #F10A55;
    ::after {
      width: 100%;
    }
  }

    @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const ExternalLink = styled.a`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background:  #F10A55;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color:  #F10A55;
    ::after {
      width: 100%;
    }
  }
      @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


const NavbarLinks = () => {
  return (
    <>

      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About Us</NavItem>

      <NavItem to="/facilities">Facilities</NavItem>
      <ExternalLink href="https://www.soulbreezebackpackers.com" target="_blank" rel="noopener noreferrer">Backpackers </ExternalLink>
      <ExternalLink className="ha-dual-btn ha-dual-btn--left" href="https://booking.frontdeskmaster.com/?hostelId=8WLO44kZDjGcYszcNSqvjDQwFwGIliEr" target="_blank" rel="noopener noreferrer">Book a room </ExternalLink>

      <NavItem to="/contacts">Contact Us</NavItem>
    </>
  )
}


export default NavbarLinks