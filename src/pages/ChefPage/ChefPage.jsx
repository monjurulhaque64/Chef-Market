import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefPage = () => {
    const { id } = useParams();
    const [chef, setChef] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    
    const handleFvrtBtn = () => {
        toast("the recipe is your favorite!");
        setIsDisabled(true);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [id]);

    if (!chef) {
        return <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>;
    }

    const { chefName, chefPicture, bio, likes, yearsOfExperience, numberOfRecipes } = chef;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>{bio}</p>
                    <p>Years Of Experience: {yearsOfExperience}</p>
                    <p>Number Of Recipes: {numberOfRecipes}</p>
                    <div className="card-actions justify-end">
                        <span className="text-xl font-bold text-green-500"><BiLike style={{ display: 'inline-block', verticalAlign: 'middle' }}></BiLike>{likes}</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-center mx-auto text-3xl font-bold text-green-500 mt-32 mb-4 pt-6'>{chef.chefName}'s Recipe</p>
                    <div className="grid grid-cols-3 gap-4">
                        {chef.recipes.map(recipe => (
                            <div key={recipe.recipe_id} className="bg-white shadow p-4 rounded-lg">
                                <div>
                                <button disabled={isDisabled} onClick={handleFvrtBtn} className="btn gap-2 mx-auto text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                                <ToastContainer />
                                </div>
                                <h2 className="text-center text-lg font-medium mb-2">{recipe.name}</h2>
                                <p className='font-bold text-green-500'>Ingredients:</p>
                                <p className="text-gray-600 mb-4">{recipe.ingredients.join(', ')}</p>
                                <p className='font-bold text-green-500'>CookingMethod:</p>
                                <p className="text-gray-600 mb-4">{recipe.cookingMethod}</p>
                                <div className="flex items-center">
                                    <span className='flex gap-2'><Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly />  {recipe.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChefPage;
