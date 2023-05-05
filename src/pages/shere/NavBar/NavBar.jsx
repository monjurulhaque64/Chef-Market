import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100 mt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={'/'}><li><a>Home</a></li></Link>
                            <Link to={'/blog'}><li><a>Blog</a></li></Link>
                            

                        </ul>
                    </div>
                    <Link to={'/'}><a  className="btn btn-ghost normal-case text-xl">SIDECHEF</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/'}><li><a>Home</a></li></Link>
                        <Link to={'/blog'}><li><a>Blog</a></li></Link>
                        
                    </ul>
                </div>
                <div className="navbar-end  lg:flex">
                    { user ? <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                        </div>
                        <a onClick={handleLogOut}  className="btn ms-4 btn-outline">Log Out</a>
                    </div> :
                    <div>
                        <Link to={'/singup'}><a className="btn sing-up  ms-4 btn-outline">SIGN UP</a></Link>
                        <Link to={'/singin'}><a className="btn ms-4">SIGN IN</a></Link>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;