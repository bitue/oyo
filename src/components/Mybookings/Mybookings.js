import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Mybookings = () => {
    const { user } = useContext(AuthContext);
    const [loading , setLoading] = useState(true)
    
    const email = user?.email;
    const [booking, setBooking] = useState([])
    console.log(email)
    useEffect(() => {
        fetch(`https://afternoon-thicket-45166.herokuapp.com/services/myBookings/${email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data)
                setBooking(data)
            })
    }, [email])

    const handleCancel = (id) => {
        console.log(id)
        const decession = window.confirm('are you sure ? want to cancel booking')
        if (decession) {
            console.log(decession)
            fetch(`https://afternoon-thicket-45166.herokuapp.com/services/cancel/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        alert('Your booking is going to be canceled ')
                        const remainBooking = booking.filter(ele => ele._id !== id)
                        setBooking(remainBooking)
                    }
                })

        }
        else{
            alert('thanks for staying with us')
        }

    }

    if(loading){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>My bookings</h1>
            {/* <p>{booking.length}</p> */}
            <div>
                {
                    booking.map(hotel => <div className='container mx-auto' key={hotel._id}>
                        <div className=' px-5 py-5 bg-gray-200 rounded-3xl my-3'>
                            <h2 className='font-bold'>Invoice Email : {hotel.email}</h2>
                            <h2 className='font-semibold text-yellow-500'>Hotel: {hotel.serviceName}</h2>
                            <div>
                                <p className=''>check in date {hotel.checkinDate}</p>
                                <p className=''>check out date {hotel.checkoutDate}</p>
                                <p className='font-bold'>{hotel?.status}</p>
                            </div>
                            <button onClick={() => handleCancel(hotel._id)} className='bg-gray-200 py-1 px-3 font-bold rounded-3xl bg-red-500'>Cancel Booking</button>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Mybookings;