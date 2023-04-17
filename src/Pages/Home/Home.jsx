import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Capsules from '../Capsules/Capsules';

const Home = () => {
    return (
        <div className='xl:px-32'>
            <Banner></Banner>
            <Search></Search>
            <Capsules></Capsules>
        </div>
    );
};

export default Home;