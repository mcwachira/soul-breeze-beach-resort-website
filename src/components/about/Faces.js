import * as React from "react"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import { FiArrowRightCircle } from "react-icons/fi"
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Button,
  Image,
} from "react-bootstrap"

//importing images

import Salim from "../../assets/images/salim.jpg"
import Ali from "../../assets/images/ali.jpg"
import Faiz from "../../assets/images/faiz.jpg"
import GymGuy from "../../assets/images/gym-guy.jpg"
import Chef from "../../assets/images/chef.jpg"



const Faces = () => {
  return (
    <div>
      <Container >
        <h2 className="text-center display-4 pt-5">FACES YOU’LL MEET</h2>
        <p className="text-center pt-2 lead">
          This are some of the wonderful people you will meet at the resort.
        </p>
        <Row className="text-center mx-auto align-items-center">
          <Col md={4} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "20rem" }}
              className=" shadow-lg"
            >
              <Image
                className="card-img-top img-fluid"
                src={Salim}
                alt="Salim the head chef"

                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-center">
                  Salim Head Chef
                </Card.Title>
                <Card.Text className="lead">
                  Salim is our chef. For years he’s responsible for Diani´s best
                  Pizza, mouthwatering Sea Food and catering to your stomach’s
                  satisfaction in general.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "20rem" }}
              className=" shadow-lg"
            >
              <Image
                className="card-img-top"
                src={Ali}
                alt="Ali our Head Gardener"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-center">
                  Ali Head Gardener
                </Card.Title>
                <Card.Text className="lead">
                  Ali is our Mr green Thumb. Years before Soul Breeze Beach
                  Resort started, he’s been here responsible for the gardens
                  beauty and serving you coconuts for a little tip.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="d-flex pb-5 align-items-lg-start">
            <Card
              border="info"
              style={{ width: "20rem" }}
              className=" shadow-lg"
            >
              <Image
                className="card-img-top"
                src={Chef}
                alt=" Creek"
                waves
                fluid
              />
              <Card.Body>
                <Card.Title className="display-6 text-center">
                  Dennis Pastry Chef
                </Card.Title>
                <Card.Text className="lead">
                  Dennis, joined our restaurants team and is part of the happy
                  mood at Soul Breeze.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mx-auto align-items-center">
          <Col md={4} sm={12} className="d-flex pb-5 ">
            <Card
              border="info"
              style={{ width: "20rem" }}
              className="shadow-lg"
            >
              <Image

                className="card-img-top img-fluid"
                src={GymGuy}

                alt="The gym coach"
                waves
                fixed
              />
              <Card.Body>
                <Card.Title className="display-6 text-center">
                  Ben Mr 4%
                </Card.Title>
                <Card.Text className="lead">
                  If you want to live healthy you need to go to the gym regularly so come to soulbreeze and Ben  our gym Instructor will help you keep fit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>



          <Col md={{ span: 4, offset: 3 }} className="d-flex ">
            <Card
              border="info"
              style={{ width: "20rem" }}
              className=" shadow-lg"
            >
              <Image

                className="card-img-top img-fluid horizontal-img"
                src={Faiz}

                alt="Faiz tennis couch"
                waves
                fixed
              />
              <Card.Body>
                <Card.Title className="display-7 text-center">
                  Faiz Tennis coach
                </Card.Title>
                <Card.Text className="lead">
                  Faiz Our tennis coach is one of the top seeded players in Africa. Come and play tennis with him or even bring you kids along for a tennis class.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>


        </Row>

      </Container>
    </div>
  )
}

export default Faces;



// const HorizontalImage = styled.img`
// width:100%;
// height:100%;
// transform:translateY(-8rem)
// `
// const Post = styled.div`
// width:100%;
// max-width:30rem;
// padding:5rem;
// background-color:#fff;
// box-shadow:0 1.4rem 8rem rgba(0,0,0,.3);
// display:flex;
// align-items:center;
// border-radius: .8rem;

// `;
// const PostImage = styled.div`
// min-width:20rem;
// max-width:20rem;
// height:10rem;
// transform:translateX(-8rem);
// position:relative;

// .card-img{
//   width:30%;
//   height:60%;
//   object-fit:cover;
//   display:block;
//   border-radius:.8rem;
// };

// `;
// const PostTile = styled.div``;
// const PostText = styled.div``;