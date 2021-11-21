import React from 'react';
import './Galary.css'

const Galary = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-3xl text-center my-5'> <span className='text-yellow-500'>OYO's</span> Hotel Gallery</h1>
            <div className='grid grid-cols-3 gap-2'>
                <div className='img-div'>
                    <img className='rounded-2xl img' src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80" alt="" />
                    
                </div>
                <div className='img-div'>
                    <img className='rounded-2xl img' src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />

                </div>

                <div className='img-div'>
                    <img className='rounded-2xl img' src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>

            </div>
            <div className='grid grid-cols-2 gap-2 my-1'>
                <div className='img-div'>
                    <img className='rounded-2xl img' src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
                </div>
                <div className='img-div'>
                    <img className='rounded-2xl img' src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Galary;