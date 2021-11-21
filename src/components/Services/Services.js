import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Spinner from '../Spinner/Spinner';

const Services = () => {
    const [services, setServices] = useState([])
    const history = useHistory()
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        fetch('https://afternoon-thicket-45166.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setServices(data)
                console.log(data)
            })
    }, [])
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-3xl text-center my-5 '><span className='text-yellow-500'>OYO's</span> Hotel Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <div className='grid sm:grid-cols-4 grid-cols-3  px-5 py-5 my-5 bg-gray-200 rounded-3xl sm:space-x-5 space-x-2'>
                        <div>
                            <img className='rounded-2xl' src={service.img} alt="" />
                        </div>
                        <div className='sm:col-span-3 col-span-2 sm:space-y-3'>
                            <h1 className='font-bold text-gray-800 '>{service.name} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg></h1>
                            <p><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>{service.place}</p>
                            <p>{service.shortDes}</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>{service.review}peoples</p>
                            <button onClick={()=> history.push(`/my-booking/${service._id}`)} className='bg-gray-200 py-2 px-3 font-bold rounded-3xl bg-yellow-400'>View More</button>

                        </div>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default Services;