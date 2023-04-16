import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='py-4'>
            <h2 className='text-center text-2xl p-4 font-bold'>Please Login</h2>
            <form className='h-[400px] lg:w-2/6 mx-auto flex justify-center items-center flex-col p-4'>
                <div className='w-full py-4'>
                    <label>Email</label><br />
                    <input type='text' className='w-full py-4 p-2 rounded-md bg-slate-300' placeholder='Enter Your Email' name='email' required />
                </div>
                <div className='w-full py-4'>
                    <label>Password</label><br />
                    <input type='password' className='w-full py-4 p-2 rounded-md bg-slate-300' placeholder='Enter Your Password' name='password' required />
                </div>
                <button className='rounded-md bg-indigo-700 hover:bg-slate-950 w-full mt-4 py-4 text-lg text-white' type='submit'>Login</button>
                <p className='text-lg mt-4'>Don't have an account. Please <Link to='/signup' className='text-blue-400'>Register</Link>!</p>
            </form>
        </div>
    );
};

export default Login;