import React from "react"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"

import {
  Container,
  Row,
  Col,
  Card,

  Image,
} from "react-bootstrap"

//importing images

import ChefRoba from "../assets/images/chef-roba.jpg"
import Pool from "../assets/images/pool.jpeg"
import Relax from "../assets/images/relax.jpeg"
import Creek from "../assets/images/creek.jpg"

// import AOS from "aos";
// import "aos/dist/aos.css";


const fontComponent = {
  fontSize: "1.7rem"
}

const Amenities = () => {

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
    <>
      <Container>
        <h2 className="text-center display-2 p-5">
          Amenities, Services, & Travel Guide
        </h2>
        <Row>
          <Col md={3} sm={12} className="d-flex pb-5">
            <Card
              border="info"
              style={{ width: "15rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top"
                src={Pool}
                alt="swimming pool"
                waves
                fluid
              />

              <Card.Body>
                <Card.Title className="display-6 text-center">Pool</Card.Title>
                <Card.Text className="lead">
                  The Resort Rooms are just in front of our two Swimming Pools.
                  The ocean is less than 100m away
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "15rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top"
                src={ChefRoba}
                alt="Salim the head chef"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title style={fontComponent} className="display-6 text-center">
                  Family Friendly
                </Card.Title>
                <Card.Text className="lead">
                  Kids and Families are welcome to enjoy a fun day out, good
                  food and have some fun in the pool.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "15rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top"
                src={Relax}
                alt="Massage parlour"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-center">
                  Relaxation
                </Card.Title>
                <Card.Text className="lead">
                  Enjoy and relax at our massage and parlor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "15rem" }}
              className="flex-fill shadow-lg"

            >
              <Image
                className="card-img-top"
                src={Creek}
                alt=" Creek"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-center">
                  Tours & Culture
                </Card.Title>
                <Card.Text className="lead">
                  Discover the surrounding villages, learn more about the real
                  Africa, go to Safaris, Diving, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Amenities
