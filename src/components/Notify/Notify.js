import React, { useRef, useState } from 'react';

const Notify = () => {
    const [email , setEmail] = useState('')
    const emailRef = useRef()
    const handleNotify = ()=> {
        const email = emailRef.current.value;
        setEmail(email)
        const user ={user:email}

        fetch('https://afternoon-thicket-45166.herokuapp.com/notify', {
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                alert('we will notify your our updates . keep close with us')
            }
        })

    }
  
    return (
        <div className=' p-5  my-5 '>
            <div className='my-3'>
                <h1 className='font-bold text-3xl text-center'>Stay Connected with <span className='text-yellow-500'>OYO</span></h1>
            </div>
            <div className='text-center'>
                <input ref={emailRef} type="email" placeholder='Drop your email' className='py-2 rounded-2xl px-5 border-2 w-2/3 ' />
                <button className='bg-black font-bold px-3 py-2 rounded-2xl text-white  ' onClick={handleNotify}>Notify OYO</button>
            </div>
        </div>
    );
};

export default Notify;