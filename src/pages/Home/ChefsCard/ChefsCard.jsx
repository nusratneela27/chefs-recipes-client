import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefsCard = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chefs-recipe-server-nusratneela27.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <Container>
            <h1 className='d-flex justify-content-center p-4'>All Chefs Here</h1>
            <hr />
            <div className='row row-cols-1 row-cols-md-3'>
                {
                    chefs.map(chef =>
                        <div
                            key={chef.id}
                        >
                            <div className='p-3 mt-4 border rounded shadow'
                            >
                                <div className='text-center'>
                                    <LazyLoadImage effect="blur" src={chef.img} className='rounded ' height="300" width="250">
                                    </LazyLoadImage>
                                </div>
                                <div className='ms-4 mt-2'>
                                    <h3>{chef.name}</h3>
                                    <p><span className='fw-bold'>Year of experience:</span> {chef.experience}</p>
                                    <p><span className='fw-bold'>Number of recipes:</span> {chef.numberOfRecipes}</p>
                                    <p><span className='fw-bold'>Likes:</span> {chef.likes}</p>
                                    <Link to={`/chefs/${chef.id}`}>
                                        <Button variant="warning">View Recipes <FaArrowCircleRight></FaArrowCircleRight></Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default ChefsCard;