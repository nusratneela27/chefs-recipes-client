import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form className='mt-5 mb-5 p-5 border rounded'>
                        <h1 className='fw-bold'>Login</h1>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button variant="warning" type="submit" className='mb-3'>
                            Login
                        </Button>

                        <br />

                        <Form.Text className="text-secondary">
                            Don't Have an Account? <Link to='/register' className='text-warning fw-bold text-decoration-none'>Register</Link>
                        </Form.Text>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
                <Col md={6}>
                    <div>
                        <img src="https://i.ibb.co/nLJCvNS/login.png" alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};




export default Login;