import React from 'react';

const Search = () => {
    return (
        <section className='py-8 p-4'>
            <h2 className='text-center text-xl p-4 font-bold'>Please Search Rockets</h2>
            <div className='md:flex justify-evenly items-center py-8 p-4 gap-3 text-center'>
                <input type='text' className='py-4 w-full p-2 mb-2 rounded-md bg-slate-100' placeholder='Find Rockets By Status' name='' />
                <input type='text' className='py-4 w-full p-2 mb-2 rounded-md bg-slate-100' placeholder='Find Rockets By Original_launch' name='' />
                <input type='text' className='py-4 w-full p-2 mb-2 rounded-md bg-slate-100' placeholder=' Rockets By Type' name='' />
            </div>
        </section>
    );
};

export default Search;