import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Image } from "react-bootstrap"
import { GoLocation } from "react-icons/go"
import { FiPhone } from "react-icons/fi"
import { IoMailOutline } from "react-icons/io5"
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti"

//import Images

import Logo from "../../assets/images/logos/soulbreeze-logo.png"

const Footer = () => {
  return (

    <FooterData fluid>
      <Row >
        <Col md={4} sm={12} className="p-5">
          <h3 className=" mb-3">ABOUT US</h3>
          <Image src={Logo} alt="Logo" waves fluid width={100} height={90} />
          <p className="lead">
            Soul Breeze Beach Resort is a budget friendly paradise born out of
            the need to create a "happy place for people".
          </p>
        </Col>
        <Col md={4} sm={12} className="p-5">
          <h3 className="  mb={3}">CONTACT INFO</h3>
          <p className="lead">Get in touch with us today!</p>
          <Row>
            <Col md={4} sm={4}>
              <Location />
            </Col>
            <Col md={8} sm={8} >
              <h3>Address: </h3>
              <p>Galu Beach Rd, Diani</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={4}>
              <Phone />
            </Col>
            <Col md={8} sm={8}>
              <h3>Phone: </h3>
              <p>+254743 211231</p>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={4}>
              <Mail />
            </Col>
            <Col d={8} sm={8}>
              <h3> Email: </h3>
              <p>info@soulbreezebeachresort.com</p>
            </Col>
          </Row>
        </Col>

        <Col md={4} sm={12} className="p-5">
          <h3 className="text-center  mb-5">FOLLOW US</h3>
          <SocialMedia>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialMedia>


       
          <Row>
            <Col md={4} sm={12}>
            <Link className="lead" to='/PrivacyPolicy'>
  Privacy Policy
</Link>
            </Col>
</Row>
        </Col>
      </Row>
      <Row>
        <CopyRight lg={12} mb-0="true">
          <p className="text-center text-white">
            Copyright {new Date().getFullYear()} Soul Breeze Beach Resort - ALL RIGHTS RESERVED
          </p>
        </CopyRight>
      </Row>
    </FooterData>

  )
}

export default Footer

const FooterData = styled(Container)`
      background:#f4f4f4;
      margin-bottom:0
      `

const CopyRight = styled(Col)`
      background:#1B1B1B;

      // const FooterAbout = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   justify-content: space-between;

//   font-size: 1.2rem;
// `

// const FooterContact = styled.div`
//   font-size: 1.3rem;
// `

const FooterSocial = styled.div`
      font-size: 1.3rem;
      `

const Location = styled(GoLocation)`
      font-size: 3rem;
      color: #e8485f;
      `
const Phone = styled(FiPhone)`
      font-size: 3rem;
      color: #e8485f;
      `
const Mail = styled(IoMailOutline)`
      font-size: 3rem;
      color: #e8485f;
      `

const SocialMedia = styled.div`
      display: flex;

      align-items: center;
      justify-content: space-around;
      `

const Facebook = styled(TiSocialFacebook)`
      font-size: 3rem;
      color: #e8485f;
      `

const Instagram = styled(TiSocialInstagram)`
      font-size: 3rem;
      color: #e8485f;
      `
const Twitter = styled(TiSocialTwitter)`
      font-size: 3rem;
      color: #e8485f;
      `