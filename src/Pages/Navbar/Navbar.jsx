import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from '../../context/AuthProvider';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <header>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <nav className="relative flex items-center justify-between p-4">
                    {/* Logo section */}
                    <Link to="/" >
                        <span className='text-xl font-bold'>
                            SPX Capsule App
                        </span>
                    </Link>

                    {/* Nav item section */}
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                        </li>
                        {
                            user?.uid ?
                                <>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/signup' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Signup</NavLink>
                                    </li>
                                </>
                        }
                    </ul>

                    {/* Mobile navbar section */}
                    <div className="lg:hidden">
                        {/* Dropdown open button */}
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
                                    {/* Logo & button section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link to="/" className="inline-flex items-center">
                                                <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    SPX Capsule App
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
                                    {/* Mobile nav items section */}
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














