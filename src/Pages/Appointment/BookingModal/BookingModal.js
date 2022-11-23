import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ treatment, selectDate, setTreatment, refetch }) => {
  const { name, slots, price } = treatment;
  const date = format(selectDate, "PP");

  const { user } = useContext(AuthContext);

  const handelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patient = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patient,
      slot,
      email,
      phone,
      price,
    };
    fetch("https://droctor-proteal-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal mx-auto">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold my-4">{name}</h3>

          <form onSubmit={handelBooking} className="grid gap-3">
            <input
              value={date}
              type="text"
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="number"
              placeholder="phone number"
              className="input input-bordered w-full "
            />
            <br />
            <input className="btn w-full" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
