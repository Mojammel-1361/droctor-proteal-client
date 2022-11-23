import React from "react";
import { useQuery } from "@tanstack/react-query";
import Lodding from "../../Shared/Lodding/Lodding";
import { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://droctor-proteal-server.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const hendelDeleteDoctor = (doctor) => {
    fetch(`https://droctor-proteal-server.vercel.app/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Doctor Delete successfully");
        }
      });
  };

  if (isLoading) {
    return <Lodding></Lodding>;
  }
  return (
    <div>
      <h1 className="text-3xl">Manage Doctor: {doctors?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-3/4">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>

              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>

                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="Confirmation-modal"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you suer you want to delete`}
          message={`if you delete ${deletingDoctor.name}. It cannot be Undone`}
          successAction={hendelDeleteDoctor}
          successButtonName="Delete"
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
