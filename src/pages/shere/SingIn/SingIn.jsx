import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import logo from '../../../assets/logo.462580ec6c5e.png';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingIn = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left mx-auto">
                        <img className="text-center mx-auto w-72 mb-4" src={logo} alt="" />
                        <h1 className="text-4xl font-bold text-center  mx-auto" >Sign In to SideChef
                        </h1>
                        <p className="py-6 text-center  mx-auto">Save recipes, plan meals, and shop ingredients
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={'/singup'}><a href="#" className="label-text-alt link link-hover">Don't have an Account?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6 text-center mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <h4 className='text-bold'>OR</h4>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-primary"><FaGoogle className='mr-2 '></FaGoogle>COUNTINUE WITH GOOGLE </button>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn btn-outline btn-primary"><FaGithub className='mr-2 '></FaGithub> CONTINUE WITH GITHUB</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingIn;