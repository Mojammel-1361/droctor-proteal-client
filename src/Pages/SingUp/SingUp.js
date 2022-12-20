import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hookes/useToken";
import { useState } from "react";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleSingUp = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("user created successfully");
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })

          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://droctor-proteal-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreateUserEmail(email);
      });
  };

  return (
    <div>
      <div className="h-[800px] grid justify-center items-center">
        {/* <h1 className="text-4xl">Login</h1> */}

        <div className="w-96 p-7">
          <form onSubmit={handleSubmit(handleSingUp)}>
            <h1 className="text-4xl">SingUp</h1>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-600" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
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
                  // pattern: {
                  //   value:
                  //     /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/,
                  //   message: "mast be strong",
                  // },
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
            Already have a account{" "}
            <Link className="text-secondary" to="/login">
              login{" "}
            </Link>{" "}
          </p>
          <br />
          <div className="grid justify-center">----OR----</div>
          <br />
          <button className="btn btn-outline w-full" type="">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
