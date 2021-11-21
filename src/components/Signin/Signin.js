import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';




const Signin = () => {
    const location = useLocation()
    const redirecturl = location.state?.from;
    const history = useHistory()
    const { user, signOutGoogle, signinGoogle, setUser, loading, setLoading } = useContext(AuthContext)



    const handleGoogleSignin = () => {
        setLoading(true)
       
        signinGoogle()

            .then(() => {
              
                history.push(redirecturl)
             
            })
            .finally(()=> setLoading(false))
    }

        const handleGoogleSignout = () => {
            signOutGoogle()
        }
        return (
            <div className='flex justify-center items-center my-16'>
                <div className='text-center'>
                    <div >
                        <img className='w-64' src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg" alt="" />
                    </div>
                    {
                        user.email ? <h1>{user.email}</h1> : null
                    }
                    {
                        user.email ? <button className='bg-gray-200 py-2 px-2 font-bold rounded-3xl bg-yellow-500' onClick={handleGoogleSignout} >Google Signout</button>
                            :
                            <button className='bg-gray-200 py-2 px-2 font-bold rounded-3xl bg-yellow-500' onClick={handleGoogleSignin} >Google Sign</button>
                    }

                </div>

            </div>
        );
    };

    export default Signin;