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
          These are some of the wonderful people you will meet at the resort.
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
                  Salim, the Head Chef
                </Card.Title>
                <Card.Text className="lead">
                
                  Salim is our chef of many years. He is well-known for his pizzas, as they are the best in Diani! He is also famous for his mouthwatering sea food and other world class cuisine. Indulge yourself in a rare culinary experience, courtesy of Chef Salim.
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
                  Ali, the Head Gardener
                </Card.Title>
                <Card.Text className="lead">
                  Ali is our Mr. green Thumb. He has been with us since Soul Breeze Beach Resort started. He is responsible for our beautiful gardens. He will also serve you madafu with their coconut juice, a tasty coastal refreshment. Don’t forget to tip him.
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
                  Dennis, the Pastry Chef
                </Card.Title>
                <Card.Text className="lead">
                  Dennis is one of the key players in our restaurant team and is part of the happy mood at Soul Breeze.

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
                  If you want to live healthy, you need to visit the gym regularly. So come to Soul Breeze and Ben, our gym Instructor, will help you keep fit.
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
                  Faiz, our tennis coach, is one of the top seeded players in Africa. Come and play tennis with him or even bring your kids along for tennis classes.

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