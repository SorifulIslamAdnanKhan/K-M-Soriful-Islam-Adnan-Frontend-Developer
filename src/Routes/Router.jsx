import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Error from '../Error/Error';

  export const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
                },
            ]
        }
    ])
