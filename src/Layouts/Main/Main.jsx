import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';
import Navbar from '../../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-212px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;