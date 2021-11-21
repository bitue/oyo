import React from 'react';
import { useForm } from 'react-hook-form';

const CreateService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://afternoon-thicket-45166.herokuapp.com/createService', {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('we are going to add your hotel in our app ... connected with us for affiliate')
            }
        })
    }
    return (
        <div className='container mx-auto my-10'>
            <h1 className='font-bold text-3xl  text-center my-5'>Add Hotel to affiliate Now! </h1>
            <div className='flex justify-center items-center w-2/3 mx-auto '>
                <form className='space-y-2 ' onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='hotel name' className='bg-gray-200 rounded-2xl w-full px-3 py-1' type='text' {...register("name")} />
                    <input placeholder='place' className='bg-gray-200 rounded-2xl w-full px-3 py-1' type='text' {...register("place")} />
                    <input placeholder='short description' className='bg-gray-200 rounded-2xl w-full px-3 py-1' type='text' {...register("shortDes")} />
                    <input placeholder='details information' className='bg-gray-200 rounded-2xl w-full px-3 py-1' type='text' {...register("longDes")} />
                    <input placeholder='hotel reviews' className='bg-gray-200 rounded-2xl w-full px-3 py-1' type='number' {...register("review")} />
                    <input placeholder='online img link' className='bg-gray-200 rounded-2xl w-full px-3 py-1' type='text' {...register("img")} />

                   
                    <input type="submit" className='bg-gray-200 py-1 px-3 font-bold rounded-3xl bg-yellow-400 block' />
                </form>
            </div>
        </div>
    );
};

export default CreateService;