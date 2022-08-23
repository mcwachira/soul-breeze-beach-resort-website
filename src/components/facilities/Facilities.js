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
              placeHolder="blurred"
              layout="fixed"
              width={600}
              height={400}
              className="img-fluid"
            />
          </Col>

          <Col md={6} sm={12}>
            <h3 className="display-4">Soul Breeze Bar and Restaurant</h3>
            <p className="lead">
              Something we shouldn’t forget – FOOD. Healthy, fresh, but still
              tasty! Our Beach Restaurant serves you the best Pizza in Diani,
              fresh seafood, local specialties like Pilau and Biriani, as well
              as Vegetarian Food. As for the delicious Breakfast, it’s included
              in our Room Rates.
            </p>
          </Col>
        </Row>


        <Row className="p-5">


          <Col md={6} sm={12}>
            <h3 className="display-4">Tennis</h3>
            <p className="lead">
              Come down to our resort and have a fun day playing tennis with your friends or if you want to play with professionals we have our very own Faiz, One of the best kenyan tennis player.
              Bring  your kids along to have fun and play or  even get trained to play.We have training classes daily ran by Faiz.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/tennis/tennis.jpeg"
              alt="Tennis Court"
              placeHolder="blurred"
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
              placeHolder="blurred"
              layout="fixed"
              width={700}
              height={400}
              className="img-fluid"
            />
          </Col>
          <Col md={6} sm={12}>
            <h3 className="display-4">The Swimming Pool</h3>
            <p className="lead">
              Want to drink while relaxing at the pool, well come to our resort to and get world class serviceYou can also bring your kids to enjoy swimming.
            </p>
          </Col>

        </Row>

        <Row className="p-5">


          <Col md={6} sm={12}>
            <h3 className="display-4">Beach Volleyball</h3>
            <p className="lead">
              The first time, you step on the sand of our beach, you’ll think
              it’s the finest flour. So soft that you won’t believe it. This
              sand makes it perfect to play some beach volleyball and jump after
              the ball to save points.We also have weekly beach volleyball and football competitions.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <StaticImage
              src="../../assets/images/beach-volleyball-2.jpeg"
              alt="Beach volleyball"
              placeHolder="blurred"
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
              placeHolder="blurred"
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
