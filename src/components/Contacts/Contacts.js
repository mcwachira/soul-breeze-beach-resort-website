import React, { useRef, useEffect } from "react"
import { Form, Container, Row, Button, Col } from "react-bootstrap"
import './map.css'


const Contacts = () => {

    return (
        <Container className="mt-5">
            <h2 className="display-3 text-center mb-5">Get in Touch</h2>
            <Row className="mb-3">
                <Col md={6} sm={12}>

                    <Form>
                        <Row>
                            <Col md={6} lg={3}>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required type="text" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>Phone Number (optional)</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formControlsSelect">
                            <Form.Label>Subject</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="select">Book with us</option>
                                <option value="other">General Inquiring</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>How can we help you</Form.Label>
                            <Form.Control required as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Group controlId="formBasicFirstName" className="p-3">
                            <Button
                                variant="outline-warning "
                                size="md"
                                className="p-3 text-center shadow-lg" type="submit">Submit </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} sm={12}>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=soulbreezee%20beach%20resort&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                            </iframe>
                        </div>
                    </div>
                </Col>
                <Col md={12} className="mt-5">
                    <h2 className="display-5 text-center">Get in touch</h2>
                    <ul className="list-group list-group-flush lead">
                        <li className="list-group-item">
                            <p className="lead text-center">We’re here if you need us</p>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">
                                Phone/Whatsapp
                            </span>
                            +254743211231
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">
                                Email Us
                            </span>
                            info@soulbreezebeachresort.com
                        </li>
                    </ul>

                </Col>

            </Row>
        </Container>
    )
}

export default Contacts
