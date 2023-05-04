import React from 'react';
import NavBar from '../NavBar/NavBar';
import logo from '../../../assets/logo.462580ec6c5e.png'
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Footer from '../Footer/Footer';

const SingUp = () => {
    return (
        <div>
                    <div className='container mx-auto'>
            <NavBar></NavBar>
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
                                <input type="password" required placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={'/singin'}><a href="#" className="label-text-alt link link-hover">Already a member?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default SingUp;