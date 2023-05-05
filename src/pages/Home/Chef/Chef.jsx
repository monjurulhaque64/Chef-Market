import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() =>{
        fetch('https://chef-recipe-server-monjurulhoque64-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    },[])

    

    return (
        <div className='container mx-auto mt-32 mb-32'>
            <p className='text-center mx-auto text-3xl font-bold text-green-500'>Enter the World of Gastronomy with Our Exceptional Chefs</p>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ms-4 gap-8 mx-auto'>
           {
            chefs.map(chef => <ChefCard
            key={chef._id}
            chef={chef}
            ></ChefCard>)
           }
        </div>
        </div>
        
    );
};

export default Chef;
