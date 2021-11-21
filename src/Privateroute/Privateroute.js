import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../Context/AuthProvider';


const Privateroute = (props) => {
    const {children , ...rest} = props;
    const {user, loading} = useContext(AuthContext)
    console.log(user)
    if(loading){
      return <Spinner></Spinner>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default Privateroute;