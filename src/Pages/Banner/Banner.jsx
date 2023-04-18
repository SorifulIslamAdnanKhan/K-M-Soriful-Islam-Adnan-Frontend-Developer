import React from 'react';
import banner from '../../assets/banner-image.jpg';

const Banner = () => {
    return (
        <section className='bg-cover bg-center h-screen flex justify-center items-center opacity-0.5' style={{
            backgroundImage: `url(${banner})`,
          }}>
            <div className='text-white text-center'>
                <h2 className='text-2xl md:text-4xl py-2'>SPX Modern Spacecraft Manufacturer</h2>
                <p className='text-lg lg:max-w-6xl p-4 py-8'>SPX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station.</p>
                <button className='rounded-md bg-slate-950 hover:bg-indigo-700 p-4 text-lg'>Launch Capsule!</button>
            </div>
        </section>
    );
};

export default Banner;