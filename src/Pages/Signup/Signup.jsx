import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { setAuthToken } from '../../hook/useAuthToken';

const Signup = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) =>{
        setError('');

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setAuthToken(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error=>{
            setError(error.message);
        })
        
    }

    return (
        <div className='py-4'>
            <h2 className='text-center text-2xl p-4 font-bold'>Please Register</h2>
            <form onSubmit={handleRegister} className='h-[500px] lg:w-2/6 mx-auto flex justify-center items-center flex-col p-4'>
                <div className='w-full py-4'>
                    <label>Name</label><br />
                    <input type='text' className='w-full py-4 p-2 rounded-md border' placeholder='Enter Your Name' name='name' required />
                </div>
                <div className='w-full py-4'>
                    <label>Email</label><br />
                    <input type='text' className='w-full py-4 p-2 rounded-md border' placeholder='Enter Your Email' name='email' required />
                </div>
                <div className='w-full py-4'>
                    <label>Password</label><br />
                    <input type='password' className='w-full py-4 p-2 rounded-md border' placeholder='Enter Your Password' name='password' required />
                </div>
                <button className='rounded-md bg-indigo-700 hover:bg-slate-950 w-full mt-4 py-4 text-lg text-white' type='submit'>Login</button>
                <p className='text-sm mt-4 text-red-600'>{error}</p>
                <p className='text-lg mt-4'>Already have an account. Please <Link to='/login' className='text-blue-400'>Login</Link>!</p>
            </form>
        </div>
    );
};

export default Signup;