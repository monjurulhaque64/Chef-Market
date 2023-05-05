import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
  const { chefName, chefPicture, likes, yearsOfExperience, numberOfRecipes, _id } = chef;

  return (
      <div className="card w-96 h-96 bg-base-100 shadow-xl overflow-hidden mx-auto mt-10 mb-10">
        <figure><img src={chefPicture} alt={chefName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <div className="text-sm">
            <p>Years of experience: {yearsOfExperience}</p>
            <p>Numbers of recipes: {numberOfRecipes}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-green-500"><BiLike style={{ display: 'inline-block', verticalAlign: 'middle' }}></BiLike>{likes}</span>
            <Link to={`/chef/${_id}`}><a className="btn btn-outline btn-success">View Recipes</a></Link>
          </div>
        </div>
      </div>
  );
};

export default ChefCard;
