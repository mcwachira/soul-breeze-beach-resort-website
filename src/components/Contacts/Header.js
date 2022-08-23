import React from "react"
import styles from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Row, Col } from "react-bootstrap"

const Header = () => {
  return (
    <>
      <Container>
        <HeaderBg>
          <StaticImage
            src="../../assets/images/beach1.jpg"
            alt="soul breeze backpackers logo"
            placeHolder="blurred"
            layout="fixed"
            width={1200}
            height={800}
            className="img-fluid"
          />
        </HeaderBg>
        <div>
          <Row className="align-items-md-stretch">
            <Col md={8}>
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
                <button className="btn btn-outline-light" type="button">
                  Example button
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

const HeaderBg = styles.div`


position:relative;

background-size:cover;
background-position:center;
z-index:20;



`

export default Header
