import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import RecipesCard from './RecipesCard';

const Recipes = () => {


    const recipe = useLoaderData()
    const item = recipe?.recipes
    return (
        <div>
            <div className='d-flex bg-warning bg-opacity-25 pt-5 pb-5'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className='ps-5'>
                                <LazyLoadImage effect="blur" src={recipe.img} className='rounded ' height="300" width="250">
                                </LazyLoadImage>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='ms-4 mt-2'>
                                <h3 className='fw-bold'>{recipe.name}</h3>
                                <p> <span className='fw-bold'>Biography:</span> {recipe.bio}</p>
                                <p><span className='fw-bold'>Year of experience:</span> {recipe.experience}</p>
                                <p><span className='fw-bold'>Number of recipes:</span> {recipe.numberOfRecipes}</p>
                                <p><span className='fw-bold'>Likes:</span> {recipe.likes}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <div className='row row-cols-1 row-cols-md-3'>
                    {
                        item.map(recipeDetails => <RecipesCard
                            recipeDetails={recipeDetails}
                        ></RecipesCard>

                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Recipes;