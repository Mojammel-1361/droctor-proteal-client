import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Lodding from "../../../Shared/Lodding/Lodding";

const AvailableAppointment = ({ selectDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://droctor-proteal-server.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Lodding></Lodding>;
  }
  // useEffect(() =>{
  //     fetch("https://droctor-proteal-server.vercel.app/appointmentOptions")
  //       .then((res) => res.json())
  //       .then((data) => setAppointmentOptions(data));

  // },[])

  return (
    <section className="my-16">
      <p className=" text-center text-primary font-bold">
        Available Appointments list: {format(selectDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectDate={selectDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
