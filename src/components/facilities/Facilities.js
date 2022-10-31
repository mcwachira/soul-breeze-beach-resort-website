import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { FiArrowRightCircle } from "react-icons/fi"
import {
  Container,
  Row,
  Col,

} from "react-bootstrap"


const Facilities = () => {
  return (
    <>
      <Container>
        <Row className="p-5">
          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/bar.jpeg"
              alt="soul breeze bar"
              placeholder="blurred"
              layout="fixed"
              width={600}
              height={400}
              className="img-fluid"
            />
          </Col>

          <Col md={6} sm={12}>
            <h3 className="display-4">Soul Breeze Bar and Restaurant</h3>
            <p className="lead">
              Something we shouldn’t forget – FOOD. Fresh, healthy, and very tasty! Our Beach Restaurant serves you the best Pizza in Diani, fresh seafood, local specialties like pilau and biriani, as well as vegetarian food. As for the delicious breakfast, it’s included in our room rates.
            </p>
          </Col>
        </Row>


        <Row className="p-5">


          <Col md={6} sm={12}>
            <h3 className="display-4">Tennis</h3>
            <p className="lead">
              Come down to our resort and have a fun day playing tennis with your friends. If you’d like to play with a professional, we have our very own Faiz, one of the best Kenyan tennis players. Bring your kids along to have fun and play or even get tennis classes. We have daily classes ran by Faiz.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/tennis/tennis.jpeg"
              alt="Tennis Court"
              placeholder="blurred"
              layout="fixed"
              width={600}
              height={400}
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="p-5">

          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/swimming-pool.jpg"
              alt="soul breeze swimming pool"
              placeholder="blurred"
              layout="fixed"
              width={700}
              height={400}
              className="img-fluid"
            />
          </Col>
          <Col md={6} sm={12}>
            <h3 className="display-4">The Swimming Pool</h3>
            <p className="lead">
              Want to relax by the poolside? Welcome to our resort and enjoy top flight service by the pool. You can also bring your kids to enjoy swimming. And while relaxing, our service team will attend to you, ready to serve you with food or drinks.
            </p>
          </Col>

        </Row>

        <Row className="p-5">


          <Col md={6} sm={12}>
            <h3 className="display-4">Beach Volleyball</h3>
            <p className="lead">
              The first time you step on the sand at our seafront, you’ll think it’s the finest flour. So soft that you won’t believe it. This sand makes it perfect to play some beach volleyball and jump after the ball and score points. Horn your skills here.
              And also don’t forget, we have weekly beach volleyball and football competitions.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/beach-volleyball-2.jpeg"
              alt="Beach volleyball"
              placeholder="blurred"
              layout="fixed"
              width={600}
              height={400}
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row className="p-5">
          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/Jungle-Gym.jpg"
              alt="soul breeze backpackers logo"
              placeholder="blurred"
              layout="fixed"
              width={700}
              height={400}
              className="img-fluid"
            />
          </Col>
          <Col md={6} sm={12}>
            <h3 className="display-4">Jungle Gym</h3>
            <p className="lead">
              The Jungle gym is specifically designed and suited for your
              physical exercise needs. We have specialized gym instructors and
              facilities just for you.
            </p>
          </Col>


        </Row>
      </Container>
    </>
  )
}

export default Facilities
