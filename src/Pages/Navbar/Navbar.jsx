import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-around items-center p-4'>
                <div>
                    <Link to='/' className='text-xl font-bold basis-1/3'>SPX Rocket App</Link>
                </div>
                <div className='flex justify-end items-center gap-7 basis-2/3 text-slate-950'>
                    <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                    <NavLink to='/login' className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Login</NavLink>
                    <NavLink to='/signup' className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Signup</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;