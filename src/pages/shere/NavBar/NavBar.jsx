import React from 'react';

const NavBar = () => {
    const user = null
    return (
        <div>
            <div className="navbar bg-base-100 mt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Home</a></li>
                            <li><a>Home</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">SIDECHEF</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Item 1</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    { user ? <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="data:image/jpeg;base64,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" />
                        </div>
                        <a className="btn ms-4 btn-outline">Log Out</a>
                    </div> :
                    <div>
                        <a className="btn ms-4 btn-outline">SIGN UP</a>
                        <a className="btn ms-4">SIGN IN</a>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;