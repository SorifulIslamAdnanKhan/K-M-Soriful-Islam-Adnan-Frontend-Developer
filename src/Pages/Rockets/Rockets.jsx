import React, { useEffect, useState } from 'react';
import banner from '../../assets/banner-image.jpg';

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    const url = 'http://localhost:5000/rockets';

    useEffect(() => {
        
        fetch(url)
        .then(res => res.json())
        .then(data => setRockets(data))
    }, []);

    return (
        <section className='py-10 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    rockets.map(rocket=> <div key={rocket.capsule_serial} className='text-center border p-2 rounded-lg shadow-lg shadow-slate-500/50'>
                    <p className='text-lg'>Status: {rocket.status}</p>
                    <p className='text-lg'> Original Launch: {rocket.original_launch}</p>
                    <p className='text-lg'>Missions: {rocket.missions[0]?.name}</p>
                    <p className='text-lg'>Flight: {rocket.missions[0]?.flight}</p>
                    <p className='text-lg'>Landing: {rocket.landings}</p>
                    <p className='text-lg'>Type: {rocket.type}</p>
                    <p className='text-lg'>Details: {rocket.details}</p>
                    <div className='py-6'>
                        <button className='w-full rounded-md text-white bg-slate-950 hover:bg-indigo-700 p-4 text-sm'>View Details</button>
                    </div>
                </div>)
                }
                
                
            </div>
            <div className='py-10 text-center grid grid-cols-5 md:grid-cols-10'>
                <span className='border px-6 py-2 bg-slate-100'>1</span>
                <span className='border px-6 py-2 bg-slate-100'>2</span>
                <span className='border px-6 py-2 bg-slate-100'>3</span>
                <span className='border px-6 py-2 bg-slate-100'>4</span>
                <span className='border px-6 py-2 bg-slate-100'>5</span>
                <span className='border px-6 py-2 bg-slate-100'>6</span>
                <span className='border px-6 py-2 bg-slate-100'>7</span>
                <span className='border px-6 py-2 bg-slate-100'>8</span>
                <span className='border px-6 py-2 bg-slate-100'>9</span>
                <span className='border px-6 py-2 bg-slate-100'>10</span>
            </div>
        </section>
    );
};

export default Rockets;