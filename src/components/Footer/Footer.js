import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='  bg-yellow-500 grid md:grid-cols-3 grid-cols-1    px-5 py-10 '>
                <div className='px-5'>
                    <h1 className='font-bold text-2xl text-green'>OYO</h1>
                    <p className=''>
                       OYO is Online Based Hotel booking platform where you can book hotel as well as we provide you to affiliate with us!
                    </p>
                    <p className='font-bold '>HOTLINE +9111</p>
                </div>

                <div className='quick-links px-5'>
                    <h2 className='font-bold text-2xl'>Quick Links</h2>
                    <p> <NavLink to='/home' activeClassName='underline'>OYO</NavLink> </p>
                    <p> <NavLink  to='/my-bookings' activeClassName='underline'>My Bookings</NavLink> </p>
                    <p> <NavLink to='/manageOrder' activeClassName='underline'>Manage orders</NavLink> </p>
                    <p> <NavLink to='/createService' activeClassName='underline'>Add new</NavLink> </p>


                </div>

                <div className='px-5'>
                    <h2 className='font-bold text-2xl'>Get Us</h2>
                    <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> 21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</p>

                    <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg> 10633 ,+88096667</p>

                    <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>ashikul.islam.bitue@gmail.com</p>

                </div>

            </div>

        </div>
    );
};

export default Footer;