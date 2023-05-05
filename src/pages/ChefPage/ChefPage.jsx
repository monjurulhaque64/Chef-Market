import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChefPage = () => {
    const { id } = useParams();
    const [chef, setChef] = useState(null);

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

    const { chefName, chefPicture } = chef;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefPage;
