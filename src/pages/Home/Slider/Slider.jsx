import React from 'react';
import carosol1 from '../../../assets/carosul1.jpg';
import carosol2 from '../../../assets/carosol2.jpg'

const Slider = () => {
    return (
        <div className='container mx-auto mb-32 w-full h-96 '>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-96 ">
                    <img src={carosol1} className="w-full h-96 rounded-lg" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-0 left-0 right-0 mt-10 text-emerald-500 text-center">
                        <h1 className="text-4xl font-bold">Chef Quotes</h1>
                        <p className="text-2xl mt-4">"When you run a kitchen, no matter how crazy and chaotic it gets, you have to be the calm one. You cannot show any sign of fear - the guests pick up on it. The beauty of this kitchen, though, is that everybody helps everybody."<small> - Nina Compton</small></p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96 ">
                    <img src={carosol2} className="w-full h-96 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-0 left-0 right-0 mt-10 text-emerald-500 text-center">
                        <h1 className="text-4xl font-bold">Chef Quotes</h1>
                        <p className="text-2xl mt-4">“Being a boss, it comes at a cost. You have to be really, really driven but I wouldnt trade it for the world because now I really get to enjoy this thing that we call life. Im doing what I love to do, and it doesnt feel like work.” <small>- Erica Barrett</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;