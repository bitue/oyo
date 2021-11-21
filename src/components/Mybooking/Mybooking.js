import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import AuthProvider, { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Mybooking = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    const history = useHistory()
    const [loading , setLoading] = useState(true);

   
    const { id } = useParams()
    const [hotel, setHotel] = useState({})
    useEffect(() => {
        fetch(`https://afternoon-thicket-45166.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data)
                setHotel(data)

            })
    }, [])


    const onSubmit = data =>{
       
        data.serviceName = hotel.name;
        data.status = 'pending'
        console.log(data)
        fetch('https://afternoon-thicket-45166.herokuapp.com/services/mybooking',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                alert('Your booking is confirmed , we will inform with you further details')
                history.push('/home')
            }
        })
    }

    if(loading){
        return <Spinner></Spinner>
    }



  
    return (
        <>
            <div className='container mx-auto'>


                <h1 className='font-bold text-3xl my-5 text-center '>{hotel.name}</h1>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='p-2'>
                        <img className='rounded-2xl' src={hotel.img} alt="" />
                    </div>
                    <div>
                        <div className='p-3'>
                            <h1 className='font-bold text-center text-2xl text-yellow-400'>Hotel Description</h1>
                            <h2>{hotel.longDes}</h2>
                            <p><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg> {hotel.review} peoples already  </p>


                        </div>

                    </div>

                </div>

                <div>
                    <h1 className='font-bold text-2xl text-center '>Confirm Booking Info</h1>
                    <div>
                        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p className='font-bold'>Name</p>
                                <p>
                                    <input defaultValue={user.displayName} className='bg-gray-200 py-1 px-3 rounded-3xl w-2/3' {...register("name")} /></p>
                            </div>



                            <div>
                                <p className='font-bold'>email</p>
                                <p>
                                    <input defaultValue={user.email} className='bg-gray-200 py-1 px-3 rounded-3xl w-2/3' {...register("email")} />

                                </p>
                            </div>
                            <div>
                                <p className='font-bold '>Check in date :</p>
                                <input type="date" {...register("checkinDate")} />

                            </div>
                            <div>
                                <p className='font-bold'>Check out date</p>
                                <input type="date" {...register("checkoutDate")} />

                            </div>
                            <div>
                            <p className='font-bold'>room types:</p>
                            <select {...register("typeOfroom")}>
                               
                                <option value="golden">golden</option>
                                <option value="premium">premium</option>
                                <option value="extra premium">extra premium</option>
                            </select>
                            </div>



                            <div>
                                <input className='bg-yellow-400 font-bold py-1 px-4 rounded-3xl my-5' type="submit" onClick={()=> history.push('/payment')} />

                            </div>

                        </form>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Mybooking;