import React from 'react';
import About from '../About/About';
import { Container } from 'react-bootstrap';
import ChefsCard from '../ChefsCard/ChefsCard';

const Banner = () => {
    return (
        <div>
            <div className='banner text-white'>
                <Container className='pt-5'>
                    <div >
                        <h1 className='d-flex justify-content-center align-items-center'>Welcome To Our World Class <span style={{ color: 'orange' }}>Korean</span> Cuisine</h1>
                    </div>
                </Container>
            </div>
            <ChefsCard></ChefsCard>
            <About></About>
        </div>
    );
};

export default Banner;