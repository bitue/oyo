import React, { createContext, useContext } from 'react';
import useFirebase from '../hooks/useFirebase';


 // create a context hook func
export const AuthContext = createContext()

const AuthProvider = (props) => {
    const allContext = useFirebase()
   

   
    return (
       <AuthContext.Provider value={allContext}>
           {props.children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;