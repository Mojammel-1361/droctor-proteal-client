import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Lodding from "../../Shared/Lodding/Lodding";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://droctor-proteal-server.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          //doctor info db

          fetch("https://droctor-proteal-server.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };
  if (isLoading) {
    return <Lodding></Lodding>;
  }
  return (
    <div>
      <h2 className="text-4xl">Add a Doctor</h2>

      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
            <span className="label-text"> Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="  select select-bordered w-full"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" mb-9 form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image")}
            type="file"
            className="input input-bordered w-full "
          />
        </div>

        {/* <p>{data}</p> */}
        <input
          className="btn btn-accent w-full "
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
