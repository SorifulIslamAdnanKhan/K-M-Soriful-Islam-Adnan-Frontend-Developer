import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const Error = () => {
    return (
        <div className='h-[400px] lg:w-2/6 mx-auto flex justify-center items-center flex-col p-4'>
            <ExclamationTriangleIcon className='w-96'></ExclamationTriangleIcon>
            <h1 className='text-2xl font-bold'>Opps! Page Not Found.</h1>
            <p className='py-6'>Plesae go back to home page.</p>
            <Link to='/'><button className='rounded-md bg-indigo-700 hover:bg-slate-950 mt-4 px-6 py-2 text-lg text-white'>Home</button></Link>
        </div>
    );
};

export default Error;