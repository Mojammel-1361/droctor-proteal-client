import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots, price } = appointmentOption;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-primary text-center">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
          <p>
            {slots.length}
            {slots.length > 1 ? "spaces" : "space"} spaces available
          </p>
          <h1>price: {price} $ </h1>
          <div className=" card-actions  justify-center">
            <label
              htmlFor="booking-modal"
              className="w-1/2 my-5 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
              onClick={() => setTreatment(appointmentOption)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;