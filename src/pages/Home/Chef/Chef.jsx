import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    },[])

    

    return (
        <div>
           {
            chefs.map(chef => <ChefCard
            key={chef._id}
            chef={chef}
            ></ChefCard>)
           }
        </div>
    );
};

export default Chef;
