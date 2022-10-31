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
                  Meet the locals. Feel free to go for a little fishing excursion with the friendly locals next to our Resort. The little support you give to them is handy, and time with them may well give you a unique fishing experience. You could also learn more about life in Diani from our friends.

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
                  Safaris are your once in a lifetime chance to get see, at close quarters, the famed game of Africa – the elephants, lions, giraffes and more – in their natural habitat. Tsavo East & West are the closest of the big wildlife reserves next to our Resort, but we can also arrange for tours to other reserves like the Maasai Mara.
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
                  Scuba Duka is the diving school on our compound. We truly believe in giving you quality experiences, so the instructor attends to a group of 6 people maximum at any one time. You can also get your open water license and become a diving master after training in our diving school.
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
                  Why should you enjoy the view of the ocean only from the beach? Between December and March, you can take a surfing board and use the perfect wind to go kiting. Even if it’s your first try… Don’t worry, the Kite Motions team will teach you how to have fun in the ocean.
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
