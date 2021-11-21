import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    const [loading , setLoading] = useState(true);
    const [update , setUpdate] = useState(false);
    useEffect(() => {
        fetch('https://afternoon-thicket-45166.herokuapp.com/manageOrder')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setOrders(data)
                console.log(data)
            })
    }, [update])

    const handleCancelOrder = (id) => {
        const decession = window.confirm('are you sure want to cancel')
        if (decession) {
            fetch(`https://afternoon-thicket-45166.herokuapp.com/services/all/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount===1){
                        alert('your booking is going to be deleted ')
                        const remainbooking = orders.filter(order=> order._id !==id)
                        setOrders(remainbooking)
                    }
                })

        }

    }
    const handleChangeStatus = ( id) => {
        setUpdate(false)
        const selectedService = {serviceId : id}
        fetch('https://afternoon-thicket-45166.herokuapp.com/update/status' , {
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(selectedService)
        })
        .then(res=> res.json())
        .then(data => {
           console.log(data)
           if(data.acknowledged){
               alert('we are going to update this order')
               setUpdate(true)
           }
        })
        console.log(id, selectedService)
    }
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='font-bold text-2xl text-center my-5'>Manage all Bookings</h1>
            <div>
                {
                    orders.map(order => <div className='container mx-auto' key={order._id}>
                        <div className=' px-5 py-5 bg-gray-200 rounded-3xl my-3'>
                            <h2 className='font-bold'>Invoice Email : {order.email}</h2>
                            <h2 className='font-semibold text-yellow-500'>Hotel: {order.serviceName}</h2>
                            <div>
                                <p className=''>check in date {order.checkinDate}</p>
                                <p className=''>check out date {order.checkoutDate}</p>
                                <p className='font-bold'>{order?.status}</p>
                            </div>
                            <button onClick={() => handleCancelOrder(order._id)} className='bg-gray-200 py-1 px-3 font-bold rounded-3xl bg-red-400'>Cancel Booking</button>

                            <button onClick={() => handleChangeStatus(order._id)} className='bg-gray-200 py-1 px-3 font-bold rounded-3xl bg-yellow-400'>Update Status</button>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ManageOrders;