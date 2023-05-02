import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {
    const recipe = useLoaderData()
    const item = recipe?.recipes
    console.log(recipe);
    return (
        <div>
            <h2>This is recipes {recipe.name}</h2>
            {
                item.map(ite =>
                    <img src={ite.recipe1} alt="" />
                )
            }

        </div>
    );
};

export default Recipes;