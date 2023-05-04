import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                event.target.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError("The password is less than 6 characters");
            })
    }

    // const handleUpdateProfile = (name, photo) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photo
    //     }
    //     updateUserProfile(profile)
    //         .then(result => {

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleRegister} className='mt-5 mb-5 p-5 border rounded'>
                        <h3 className='fw-bold'>Please Register</h3>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button variant="warning" type="submit" className='mb-3' >
                            Register
                        </Button>

                        <br />

                        <Form.Text className="text-secondary">
                            Already Have an Account? <Link to='/login' className='text-warning fw-bold text-decoration-none'>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-success">
                            <br />
                        </Form.Text>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                </Col>
                <Col md={6}>
                    <div>
                        <img src="https://i.ibb.co/f4Wk97z/register.png" alt="" className="w-100 mt-5" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};




export default Register;