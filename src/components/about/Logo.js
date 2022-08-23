

import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {


  return (
    <LogoWrap as={Link} to="/">
      <StaticImage
        src="../../assets/images/logos/Soul-breeze-Logo-small.png"
        alt="soul breeze backpackers logo"
        placeHolder="blurred"
        layout="fixed"
        width={100}
        height={100}
      />
    </LogoWrap>
  )
}

export default Logo