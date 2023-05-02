import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../../assets/images.jpeg'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" >
            <Container>
                <Navbar.Brand className='fw-bold fs-2' href="/">Korean cuisine</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3 fw-semibold align-items-center">
                        <Link className='ms-5 text-decoration-none text-black' to='/'>Home</Link>
                        <Link className='ms-5 text-decoration-none text-black' to='/blog'>Blog</Link>
                        <img src={user} alt="" className='border border-2 rounded-circle ms-5' height="70" weight="70" />
                        <Link to='/login'>
                            <Button className='bg-black ms-5'>Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;