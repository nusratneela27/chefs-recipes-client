import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../../assets/about.jpg'

const About = () => {
    return (
        <Container className='rounded bg-warning bg-opacity-25 mt-5 mb-5'>
            <Row>
                <Col md={6} className='p-5'>
                    <div className='about-img'>
                        <img src={about} alt="" height="400" weight="200" className='rounded' />
                    </div>
                </Col>
                <Col md={6} className='p-5'>
                    <h1 className='fw-bold'>About Us</h1>
                    <p>
                        Korea's cuisine is inspired by the agriculture and the seas surrounding it, namely the East China Sea and the Sea of Japan. South Korea's fertile plains are perfect for growing rice, a staple grain that accompanies most meals, and the seas are rich with tasty seafood like king crab and squid.
                        <br />
                        Ingredients and dishes vary by province. Many regional dishes have become national, and dishes that were once regional have proliferated in different variations across the country. Korean royal court cuisine once brought all of the unique regional specialties together for the royal family. Foods are regulated by Korean cultural etiquette.
                    </p>
                    <Button variant="secondary">Read More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;