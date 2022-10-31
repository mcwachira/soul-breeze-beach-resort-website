import React from "react"
// import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import { FiArrowRightCircle } from "react-icons/fi"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
} from "react-bootstrap"

import SeaView from "../assets/images/rooms/2.jpg"
import Standard from "../assets/images/standard.jpg"
import Banda from "../assets/images/banda.jpeg"



const imageComponent = {
  width: "100 %",
  height: "38vh",
  objectFit: "cover"
}

const Rooms = () => {

  return (
    <>
      <Container>
        <h2 className="text-center display-2 p-5">Our Rooms</h2>
        <Row className="text-center card-deck">

          <Col md={4} className="d-flex  pb-5  ">
            <Card
              border="info"
              style={{ width: "10rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top img-fluid"
                src={Standard}
                alt="standard room"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-truncate text-center">
                  Standard Room
                </Card.Title>
                <Card.Text className="lead ">
                  Enjoy your privacy and comfort in our well appointed deluxe rooms with king-size beds, where you will be at liberty to enjoy the cold or warm water of the free-standing rain shower in the bathroom.
                </Card.Text>

                <Button
                  variant="outline-warning "
                  size="md"
                  className="mt-4 p-3 text-center shadow-lg"
                >
                  Read More <FiArrowRightCircle />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "10rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top img-fluid"
                style={imageComponent}
                src={SeaView}
                alt="sea view room"
                waves
                fluid
              />

              <Card.Body>
                <Card.Title className="display-6 text-truncate text-center">
                  Sea View
                </Card.Title>
                <Card.Text className="lead">
                  A cozy and private room with a beguiling view of the turquoise waters of the Indian Ocean.  It has a private bathroom and from the location of the room, you have easy access to all the facilities at the resort
                </Card.Text>

                <Button
                  variant="outline-warning "
                  size="md"
                  className="mt-4 p-3 text-center shadow-lg"
                >
                  Read More <FiArrowRightCircle />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex  pb-5  ">
            <Card
              border="info"
              style={{ width: "10rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top img-fluid"
                style={imageComponent}
                src={Banda}
                alt="Banda room"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-truncate text-center">
                  Banda Room
                </Card.Title>
                <Card.Text className="lead ">
                  Enjoy more privacy and comfort in our Banda rooms where you will unwind on the comfortable queen-size beds. You will also be at liberty to take pleasure under the cold or warm water of the free-standing rain shower in the bathrooms.
                </Card.Text>

                <Button
                  variant="outline-warning "
                  size="md"
                  className="mt-4 p-3 text-center shadow-lg"
                >
                  Read More <FiArrowRightCircle />
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Rooms
