import React from 'react';
import Banner from '../Banner/Banner';
import Capsules from '../Capsules/Capsules';

const Home = () => {
    return (
        <div className='xl:px-32'>
            <Banner></Banner>
            <Capsules></Capsules>
        </div>
    );
};

export default Home;