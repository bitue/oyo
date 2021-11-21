import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseApp from "../firebase/initFirebase";



const useFirebase = () => {

    initFirebaseApp()
    const auth = getAuth();
    const providerGoogle = new GoogleAuthProvider();


    const [user, setUser] = useState({})
    const [loading , setLoading] = useState(true)

    const signinGoogle = () => {
     
       
       return  signInWithPopup(auth, providerGoogle)
       
    }

    const signOutGoogle = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
            

        })
        .finally(()=> setLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            else {
                setUser({})
            }

            setLoading(false)




        });


        return () => unsubscribe
    }, [])


    return {
        user, signOutGoogle, signinGoogle , setUser , loading , setLoading
    }

}


export default useFirebase;


