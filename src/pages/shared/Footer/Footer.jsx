import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-warning bg-opacity-25'>
            <Container className='py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='fs-2 fw-bold '>Korean Cuisine</h1>
                        <p className=''>If you are a chef, no matter how good a chef you are, it's not good cooking for yourself; the joy is in cooking for others.</p>
                    </div>
                    <div className='col-md-2 '>
                        <h5 className='pb-4'>About</h5>
                        <p>About Us</p>
                        <p>Shop</p>
                        <p>Work With Us</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-md-2 '>
                        <h5 className='pb-4'>Explore</h5>
                        <p>Recipes</p>
                        <p>Fitness</p>
                        <p>Healthy Living</p>
                        <p>Blog</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='pb-4'>Contact</h5>
                        <p><FaFacebook className='me-1'></FaFacebook>FaceBook</p>
                        <p><FaInstagram className='me-1'></FaInstagram>Instagram</p>
                        <p><FaTwitter className='me-1'></FaTwitter>Twitter</p>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <p>Copyright @2023 All Rights Reserved</p>
                    <p>Powered by Korean Cuisine</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;