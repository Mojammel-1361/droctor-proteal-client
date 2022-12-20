import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    
    const handelLogOut = () => {
      logOut()
        .then(() => {
          navigate("/login");
        })
        .catch((error) => console.log(error));
    };
    return (
      <div>
        <p className="text-red-600">Admin Email : mojammel127@gmail.com</p>
        <p className="text-red-600">Admin password : 123456</p>
        <p className="text-red-400">{error.statusText || error.message}</p>
        <h4 className="text-3xl">
          place <button onClick={handelLogOut}>log out</button> and log back
          again{" "}
        </h4>
      </div>
    );
};

export default DisplayError;