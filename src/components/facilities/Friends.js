import * as React from "react"


import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  Row,
  Col,
  Card,

  Image,
} from "react-bootstrap"

//importing images

import Boat from "../../assets/images/activities/Fish-Boat.jpg"
import Safaris from "../../assets/images/activities/Safaris.jpg"
import Scuba from "../../assets/images/activities/scuba-duka.jpg"
import StarFish from "../../assets/images/activities/Starfish-diani-beach.jpg"
import Kite from "../../assets/images/activities/kitesurfing.jpg"
import Gym from "../../assets/images/activities/Jungle-Gym.jpg"

const Activities = () => {

  return (
    <>
      <Container>
        <h2 className="text-center display-2 p-4">Enjoy your Holiday</h2>
        <Row className="d-flex flex-row justify-content-center align-items-center ">
          <Col md={6} lg={3} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Image
                className="card-img-top"
                src={Boat}
                alt="Boat"

                waves
                fluid
              />
              <Card.Body>
                <Card.Title className=" display-6">Fishing Trips</Card.Title>
                <Card.Text className="lead">
                  Meet the locals. Don’t be afraid of going for a little
                  excursion with the beach boys, next to our Resort. The little
                  support you give to the locals, will serve you a day with a
                  different experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Image
                className="card-img-top"
                src={StarFish}
                alt="star fish"

                waves
                fluid
              />
              <Card.Body>
                <Card.Title className=" display-6">Day Trips</Card.Title>
                <Card.Text className="lead">
                  We organize several day Trips. Chale Island, Funzi Island,
                  Wassini Island and more are waiting for you. Discover these
                  beautiful little Islands with our professional tour guides.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Image
                className="card-img-top"
                src={Safaris}
                alt="Travel to our local animal parks and see the magestic lions"

                waves
                fluid
              />
              <Card.Body>
                <Card.Title className=" display-6"> Safaris</Card.Title>
                <Card.Text className="lead">
                  Safaris are your once in a lifetime chance to get surrounded
                  by Elephants, Lions, Giraffes and more in their natural
                  environment. Tsavo East & West are the closest Safari Parks
                  next to our Resort.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className=" text-center d-flex flex-row justify-content-center align-items-center">
          <Col md={6} lg={3} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Image
                className="card-img-top"
                src={Scuba}
                alt="diving"

                waves
                fluid
              />
              <Card.Body>
                <Card.Title className=" display-6"> Scuba Duka</Card.Title>
                <Card.Text className="lead">
                  Scuba Duka is the diving school on our compound. We truly
                  believe in serving quality experiences so the groups a maximum
                  of 6 people with the instructor. You can also get your open
                  water license, and become a diving master.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 3, offset: 3 }} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Image
                className="card-img-top"
                src={Kite}
                alt="water surfing "

                waves
                fluid
              />
              <Card.Body>
                <Card.Title className=" display-6"> Kite Motion</Card.Title>
                <Card.Text className="lead">
                  Why should you enjoy the view only from the beach onto the
                  ocean? Take a board, and use the perfect wind between December
                  and March to go kiting. Even if it’s your first try… Don’t
                  worry, the Kite Motions team will teach you to have fun.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </>
  )
}

export default Activities
