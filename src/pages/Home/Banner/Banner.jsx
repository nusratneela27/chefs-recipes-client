import React from 'react';
import About from '../About/About';
import { Button, Container } from 'react-bootstrap';
import ChefsCard from '../ChefsCard/ChefsCard';
import Contact from '../Contact/Contact';

const Banner = () => {
    return (
        <div>
            <div className='banner text-white'>
                <Container className='pt-5'>
                    <div>
                        <h1 className='d-flex justify-content-center text-warning fw-bold pt-5 mt-5 mb-4'>Korean Cuisine</h1>
                        <h1 className='d-flex justify-content-center fw-bold mb-4'>Welcome To Our World Class Famous Chefs Website</h1>
                        <h2 className='d-flex justify-content-center'>Browse through over 100 tasty recipes</h2>
                        <div className='text-center mt-5'>
                            <Button className="bg-warning text-black fw-bold ">Explore Recipes</Button>
                        </div>
                    </div>
                </Container>
            </div>
            <ChefsCard></ChefsCard>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Banner;