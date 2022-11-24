import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hookes/useToken';

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const provider = new GoogleAuthProvider();
    const { LoginUser, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError]= useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    
    if(token){
      navigate(from, { replace: true });
    }
  


    const handleGoogle = () => {
      googleLogin(provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setLoginUserEmail(user.email);
          
        })
        .catch((err) => console.error(err));
    };



    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        LoginUser(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            
          })
          .catch((error) => {
            setLoginError(error.message)
            console.log(error)
          });
    }
    return (
      <div className="h-[800px] grid justify-center items-center">
        {/* <h1 className="text-4xl">Login</h1> */}

        <div className="w-96 p-7">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="text-4xl">Login</h1>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> your Email</span>
              </label>
              <input
                {...register("email", { required: "email is required" })}
                placeholder="Email"
                type="text"
                className="input input-bordered w-full "
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> password</span>
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: { value: 6, message: "must 6" },
                })}
                placeholder="password"
                type="password"
                className="input input-bordered w-full "
              />
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password?.message}
                </p>
              )}
              <p className="text-red-600">{loginError}</p>
              <label className="label">
                <span className="label-text">Forget password ?</span>
              </label>
            </div>

            {/* <p>{data}</p> */}
            <input
              className="btn btn-accent w-full "
              value="Login"
              type="submit"
            />
          </form>
          <p>
            New to Doctors Portal{" "}
            <Link className="text-secondary" to="/signup">
              Create new account{" "}
            </Link>{" "}
          </p>
          <br />
          <div className="grid justify-center">----OR----</div>
          <br />

          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full"
            type=""
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    );
};

export default Login;