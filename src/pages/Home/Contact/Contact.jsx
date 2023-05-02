import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <div className='contact'>
            <Container>
                <h1 className='text-white fw-bold pb-5 pt-5'>Get In Touch With Us</h1>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>Your Phone Number</Form.Label>
                                <Form.Control type="email" placeholder="Number" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>Your message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="secondary">Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;