import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                event.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError("Password didn't match");
            })
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleLogin} className='mt-5 mb-5 p-5 border rounded'>
                        <h1 className='fw-bold'>Login</h1>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button variant="warning" type="submit" className='mb-3'>
                            Login
                        </Button>
                        <br />

                        <div>
                            <Button variant="light" className='me-3'><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                            <Button variant="light"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
                        </div>

                        <br />

                        <Form.Text className="text-secondary">
                            Don't Have an Account? <Link to='/register' className='text-warning fw-bold text-decoration-none'>Register</Link>
                        </Form.Text>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <br />
                        <Form.Text className="text-danger">
                            {error}
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