import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ChefsCard = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <Container>
            <div className='row row-cols-1 row-cols-md-3'>
                {
                    chefs.map(chef =>
                        <div >
                            <div
                                key={chef.id}
                                className='p-3 mt-4 border rounded shadow'
                            >
                                <div className='text-center'>
                                    <img src={chef.img} className='rounded ' height="300" width="250" />
                                </div>
                                <div className='ms-4 mt-2'>
                                    <h3>{chef.name}</h3>
                                    <p>Year of experience: {chef.experience}</p>
                                    <p>Number of recipes: {chef.numberOfRecipes}</p>
                                    <p>Likes: {chef.likes}</p>
                                    <Button className='bg-warning'>View Recipes</Button>
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