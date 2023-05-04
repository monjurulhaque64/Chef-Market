import React, { useContext, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import logo from '../../../assets/logo.462580ec6c5e.png'
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import { AuthContext } from '../../../providers/AuthProvider';

const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error , setError] = useState('')

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password)
        setError('');
        if(password.length < 6){
            setError('Please Give 6 digit password')
            return;
        }

        createUser(email, password)
        .then(result =>{
            const createdUser = result;
            form.reset();
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })

    }
    return (
        <div>
            <div className='container mx-auto'>
                <NavBar></NavBar>
                <form onSubmit={handleSingUp}>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left mx-auto">
                                <img className="text-center mx-auto w-72 mb-4" src={logo} alt="" />
                                <h1 className="text-4xl font-bold text-center  mx-auto" >Welcome to SideChef
                                </h1>
                                <p className="py-6 text-center  mx-auto">Save recipes, plan meals, and shop ingredients
                                </p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name='photo' required placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' required placeholder="Password" className="input input-bordered" />
                                        <label className="label">
                                            <Link to={'/singin'}><a href="#" className="label-text-alt link link-hover">Already a member?</a></Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                        <p className='text-red-600'>{error}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default SingUp;