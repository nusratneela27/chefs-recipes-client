import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';

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
                                <img src={recipe.img} className='rounded ' height="300" width="250" />
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
                        item.map(recipeDetails =>
                            <div>
                                <div className='p-3 mt-5 mb-5 border rounded shadow'>
                                    <div className='text-center'>
                                        <img src={recipeDetails.recipe1} className='rounded ' height="250" width="250" />
                                    </div>
                                    <div className='ms-4 mt-2'>
                                        <h3 className='fw-bold'>{recipeDetails.recipeName}</h3>
                                        <p> <span className='fw-bold'>ingredients: </span> {recipeDetails.ingredients}</p>
                                        <p><span className='fw-bold'>cookingMethod: </span> {recipeDetails.cookingMethod}</p>
                                        <p><span className='fw-bold'>rating: </span> {recipeDetails.rating}</p>
                                        <Button variant="warning"><FaRegStar></FaRegStar> Add to favorite</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Recipes;