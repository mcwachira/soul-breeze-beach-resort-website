import * as React from "react"
import styled from "styled-components"
// import { Button } from "./Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { FiArrowRightCircle } from "react-icons/fi"
import { Container, Row, Col, Button } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
      <Container className="mt-5 mb-5 pt-5 fluid=md">
        <Row className="text-center ">
          <Col md={12} sm={12} xs={12}>
            <h1 className="display-2 text-center">ABOUT US</h1>
            <h3 className="text-center p-3">Welcome To Paradise</h3>

            <p className="lead text-center">
              Soul Breeze Beach Resort is a friendly 'home away from home'
              paradise located on the shores of Diani beach Kenya. With a new
              name comes great responsibility, where your experience is key to
              us. We simply wanted to create a unique vibe and safe space
              welcoming all types from around the world. Let us offer you a once
              in a lifetime experience here with us!
            </p>

            <Button
              variant="outline-warning "
              size="lg"
              className="mt-5 p-3 text-center shadow-md"
            >
              learn more <FiArrowRightCircle />
            </Button>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <h1 className="display-1 text-center">Soul Breeze</h1>
            <h3 className="text-center p-3">Paradise Far from Home</h3>

            <p className="lead">
              Once you’ve experienced Soul Breeze’s spirit, we guarantee you
              will want to come back. The Soul Breeze Beach Resort is a place of
              a unique spirit and vibe where we see ourselves as a family. Here
              are no strangers, just friends whom you have yet to meet! We are
              excited to offer a safe space to accommodate all sorts of genuine
              souls from around the globe.The relationships and memories we will
              create together at Soul Breeze & Zanzibar Village are for life. We
              pride ourselves on the availability of amenities we have to offer,
              further enhancing your amazing visit to our beautiful spot in this
              paradise we call Diani beach Kenya.
            </p>
          </Col>

          <Col className="my-5">
            <StaticImage
              className="img-fluid"
              src="../assets/images/hotel.jpg"
              alt="soul breeze hotel"
              placeholder="blurred"
              layout="fixed"
              width={600}
              height={400}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About

const arrowRight = styled(FiArrowRightCircle)`
  font-size: 1.3rem;
  color: light-green;
`
