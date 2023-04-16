import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Bars3BottomRightIcon,XMarkIcon} from "@heroicons/react/24/solid";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <nav className="relative flex items-center justify-between p-4">
                    {/* Logo section */}
                    <Link to="/" >
                        <span className='text-xl font-bold'>
                            SPX Rocket App
                        </span>
                    </Link>

                    {/* Nav item section */}
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Signup</NavLink>
                        </li>
                    </ul>

                    {/* Mobile Navbar Section */}
                    <div className="lg:hidden">
                        {/* Dropdown Open Button */}
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className="w-5 text-gray-600" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    {/* Logo & Button section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link to="/" className="inline-flex items-center">
                                                <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    SPX Rocket App
                                                </span>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className="w-5 text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link to="/" className="default">Home</Link>
                                            </li>
                                            <li>
                                                <Link to='/login' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">Login</Link>
                                            </li>
                                            <li>
                                                <Link to='/signup' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">Signup</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;



{/* Previous Code


<nav className='flex justify-around items-center p-4'>
<div>
    <Link to='/' className='text-xl font-bold basis-1/3'>SPX Rocket App</Link>
</div>
<div className='flex justify-end items-center gap-7 basis-2/3 text-slate-950'>
    <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
    <NavLink to='/login' className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Login</NavLink>
    <NavLink to='/signup' className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Signup</NavLink>
</div>
</nav> */}














