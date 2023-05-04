import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import users from '../../../assets/images.jpeg'
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" >
            <Container>
                <Navbar.Brand className='fw-bold fs-2' href="/">Korean cuisine</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3 fw-semibold align-items-center">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/blog'>Blog</NavLink>
                        {
                            user && <img src={users} alt="" className='border border-2 rounded-circle ms-5' height="70" weight="70" />
                        }
                        {
                            user ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogout} variant="dark" className='ms-5'>Logout</Button>
                                </>
                                :
                                <Link to='/login'>
                                    <Button variant="dark" className='ms-5'>Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;