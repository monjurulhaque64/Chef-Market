import React from 'react';

const WhyTry = () => {
    return (
        <div className=' container mx-auto mt-32 mb-32 '>
            <p className='text-center mx-auto text-3xl font-bold text-green-500 mb-10 pt-6'>Why Try SideChef?</p>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ms-4 gap-8 mx-auto'>
                <div className='mx-auto'>
                    <img className='w-32 mx-auto' src="https://static.thenounproject.com/png/2434646-200.png" alt="" />
                    <p className='font-bold text-lg mt-2'>All Your Favorite Recipes Saved</p>
                </div>
                <div className='mx-auto'>
                    <img className='w-32 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKDJY8Yc-04xnLzbeLoiAov7QSDiFideyLd6tuyr1JyEnY_MsZwoZymTFEC6t73mNXz8&usqp=CAU" alt="" />
                    <p className='font-bold text-lg mt-2'>Free Meal Planning Tool</p>
                </div>
                <div className='mx-auto'>
                    <img className='w-32 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvjETOVZ-LYI8wP71RO4TywOeZuiyrUJjtFPg2dNEAvjv0BgIonv-lN6x-ryXFPYFrgA&usqp=CAU" alt="" />
                    <p className='font-bold text-lg mt-2' >Order Only What You Need</p>
                </div>
            </div>
        </div>
    );
};

export default WhyTry;