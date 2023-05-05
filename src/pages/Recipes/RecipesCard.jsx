import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { FaRegStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const RecipesCard = ({ recipeDetails }) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleFevButton = () => {
        toast.success('added to favorite')
        setButtonClicked(true);
    };

    const { recipe1, recipeName, ingredients, cookingMethod, rating } = recipeDetails;

    return (
        <div>
            <div>
                <div className='p-3 mt-5 mb-5 border rounded shadow'>
                    <div className='text-center'>
                        <img src={recipe1} className='rounded ' height="250" width="250" />
                    </div>
                    <div className='ms-4 mt-2'>
                        <h3 className='fw-bold'>{recipeName}</h3>
                        <p> <span className='fw-bold'>ingredients: </span> {ingredients}</p>
                        <p><span className='fw-bold'>cookingMethod: </span> {cookingMethod}</p>
                        <p><span className='fw-bold'>rating: </span> {rating}</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly />
                        <div>
                            <Button className='mt-2' onClick={handleFevButton} disabled={buttonClicked} variant="warning"><FaRegStar></FaRegStar> Add to favorite</Button>
                        </div>

                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RecipesCard;