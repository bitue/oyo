import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Nav = () => {
    const { user, signOutGoogle } = useContext(AuthContext)


    return (
        <div>
            <div className='bg-gray-100 py-5 sm:px-5 sm:flex justify-between items-center'>
                <div className="logo">
                    <NavLink to='/home'> <h1 className='text-yellow-400 text-center sm:text-left font-bold text-3xl'>OYO</h1></NavLink>

                </div>
                <div className="rest">
                    <div className=''>
                        {
                            user.email ? <div className='flex justify-center items-center space-x-1'>
                                <NavLink className='bg-gray-200  sm:py-2 sm:px-2 sm:font-bold rounded-3xl ' activeClassName='bg-yellow-400' to='/my-bookings'>My booking</NavLink>

                                <NavLink className='bg-gray-200  sm:py-2 sm:px-2 sm:font-bold  rounded-3xl ' activeClassName='bg-yellow-400' to='/manageOrder'>ManageOrders</NavLink>

                                <NavLink className='bg-gray-200  sm:py-2 sm:px-2 sm:font-bold  rounded-3xl ' activeClassName='bg-yellow-400' to='/createService'>Add New</NavLink>
                                <p>{user.displayName}</p>
                                <button className='bg-gray-200  sm:py-2 sm:px-2 sm:font-bold  rounded-3xl ' onClick={signOutGoogle}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /> 
                                </svg> </button> 
                               
                            </div>
                              
                                : <div className='text-center'> <NavLink className='bg-gray-200  sm:py-2 sm:px-2 sm:font-bold rounded-3xl text-center ' activeClassName='bg-yellow-500' to='/sign-in'>Sign in</NavLink> </div>

                        }







                    </div>
                </div>
            </div>

        </div>
    );
};

export default Nav;