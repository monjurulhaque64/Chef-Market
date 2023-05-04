import React from 'react';

const Creators = () => {
    return (
        <div className='rounded-lg mt-32 mb-32 bg-gray-100 pb-1 '>
            <p className='text-center mx-auto text-3xl font-bold text-green-500 mt-32 mb-4 pt-6'>Meet Our Creators</p>
            <p className='text-center mx-auto text-lg font-bold text-black'> Meet our community of culinary experts, food bloggers to masterchefs from across the globe. </p>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">

                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="https://www.sidechef.com/profile/ca700de1-6115-4964-9ab3-ab2df8c3c9dd.png?d=980x1120" />
                            </a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href="#">
                                        Anthony Serrano
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">Main Chef</p>
                            </header>

                        </article>
                        {/* END Article */}
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="https://www.sidechef.com/profile/d90def7d-6460-493e-ae6a-51460f6d1223.jpeg?d=980x1120" />
                            </a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href="#">
                                        Lauren Holdcroft
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">Chef</p>
                            </header>

                        </article>
                        {/* END Article */}
                    </div>
                    <div className="my-1 px-1 hidden lg:block w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="https://www.sidechef.com/profile/287b7d96-19d2-4367-8f06-eacd3cc7ce43.jpg?d=980x1120" />
                            </a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href="#">
                                        Meiko
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">Chef</p>
                            </header>

                        </article>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Creators;