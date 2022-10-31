import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { FiArrowRightCircle } from "react-icons/fi"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Button,
  Image,
  Carousel,
} from "react-bootstrap"

const Friends = () => {
  const data = useStaticQuery(graphql`
    query {
      SlideShow: allFile(
        filter: { relativeDirectory: { eq: "kiteMotion" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                height: 400
                width: 600
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
        }
      }
    
      ScubaDuka: allFile(
        filter: { relativeDirectory: { eq: "scubaduka" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                height: 400
                width: 600
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Container className="mt-5 mb-5 pt-5 mx-auto" id="about">
        <h2 className="text-center display-2 p-5">Our Friends</h2>
        <Row className=" text-center">
          <Col md={6} sm={12} xs={12}>
            <h3 className="display-4">Kitemotion</h3>

            <p className="lead  text-sm-start">
              KiteMotion School is located at the Soul Breeze Resort sea front, one of the most beautiful locations on the Kenyan coast. KiteMotion is the only kite surfing full-time school at Diani Beach. Our training is world class. It is conducted according to the guidelines and the high standards set by the International Kiteboarding Organization (IKO). After completing the training, you will receive a certificate that will allow you to rent equipment anywhere in the world to enjoy your surfing!
            </p>
            <Button
              variant="outline-warning "
              size="md"
              className="p-3 mb-5 text-center shadow-md"
            >
              Learn More <FiArrowRightCircle />
            </Button>
          </Col>

          <Col md={6}>
            <Carousel mt={3} col-md={6} variant="dark">
              {data.SlideShow.edges.map(({ node }) => (
                <Carousel.Item key={node.id}>
                  <GatsbyImage
                    image={node.childImageSharp.gatsbyImageData}
                    alt={node.base}
                    className="d-flex justify-content-center"
                  // className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="text-center  mt-5">
          <Col md={6} >
            <Carousel col-md={6} variant="dark">
              {data.ScubaDuka.edges.map(({ node }) => (
                <Carousel.Item key={node.id}>
                  <GatsbyImage
                    image={node.childImageSharp.gatsbyImageData}
                    alt={node.base}
                    className="d-flex justify-content-center"
                  // className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6} >
            <h3 className="display-4">Scuba Duka</h3>

            <p className="lead  text-sm-start">
              Welcome to Scuba Duka, also located at the Soul Breeze Beach Resort seafront. We offer all PADI and SSI scuba diving courses from beginner to Dive master level. We run daily dive trips to the local coral reefs and ship wrecks and we also provide reef snorkeling excursions. The scuba diving in Diani is awesome and depending on the time of the year, there is the possibility of sighting whale sharks, manta rays, dolphins, turtles and much more sea life near the reef. What are you waiting for? Come diving with Scuba Duka today!
            </p>
            <Button
              variant="outline-warning "
              size="md"
              className="p-3 mx-auto my-auto text-center shadow-lg"
            >
              Learn More <FiArrowRightCircle />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Friends
// const AboutUs = styled.div``
// const Story = styled.div``
