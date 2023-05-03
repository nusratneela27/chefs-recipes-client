import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form className='mt-5 mb-5 p-5 border rounded'>
                        <h3>Please Register</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                name='accept'
                                label={<>Accepts <Link to='/terms'>Terms and Conditions</Link> </>} />
                        </Form.Group>

                        <Button variant="warning" type="submit" >
                            Register
                        </Button>

                        <br />

                        <Form.Text className="text-secondary">
                            Already Have an Account? <Link to='/login'>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
                <Col md={6}>
                    <div>
                        <img src="https://i.ibb.co/f4Wk97z/register.png" alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};




export default Register;