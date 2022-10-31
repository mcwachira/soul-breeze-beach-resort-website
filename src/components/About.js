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
            <h3 className="text-center p-3">Welcome to an African Paradise</h3>

            <p className="lead text-center">
              Soul Breeze Beach Resort is your friendly and enchanting paradise on the Diani Beach in the lush south coast of Kenya. Your experience here means everything to us. We simply want you to have a memorable holiday in the sun that you will treasure for life. You will enjoy being with us, savoring the best in Kenyan hospitality in a refreshing, pleasant atmosphere. We pull out all the stops to ensure you are most comfortable, enjoying an alluring and lively time on the Diani beach – the best in Africa. You will enjoy a once in a lifetime experience here with us!

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
              Once you’ve experienced Soul Breeze’s relaxed, cheerful atmosphere and vibrant spirit, we are sure you will want to come back. Here, our guests are family. When you pay us a visit, you will not find strangers, just friends looking forward to meeting you! We are excited and wait in anticipation to offer you a personalized, south coast experience. 
            </p>
              <p>
               The relationships and memories we will create here together are for life. And to make your stay most enjoyable, we have it all – the cuisine and the amenities to make you relax and unwind on the soft white sands of Diani beach and also don’t forget, we have Zanzibar Village within the resort, a haven for backpackers.
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
