import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Rockets from '../Rockets/Rockets';

const Home = () => {
    return (
        <div className='xl:px-32'>
            <Banner></Banner>
            <Search></Search>
            <Rockets></Rockets>
        </div>
    );
};

export default Home;