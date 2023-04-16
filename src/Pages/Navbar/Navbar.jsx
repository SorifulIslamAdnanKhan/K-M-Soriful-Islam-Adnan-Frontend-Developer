import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-around items-center p-4 border-b-2 border-slate-300'>
                <div>
                    <Link to='/' className='text-xl basis-1/3'>SPX Rocket App</Link>
                </div>
                <div className='flex justify-end items-center gap-3 basis-2/3'>
                    <Link to='/' className='text-slate-950' >Home</Link>
                    <Link to='/login' className='text-slate-950'>Login</Link>
                    <Link to='/signup' className='text-slate-950'>Signup</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;