import React from 'react';
import appoin from "../../../assets/images/appointment.png";

const Contuct = () => {
    return (
      <section
        className="mb-5"
        style={{
          background: `url(${appoin})`,
        }}
      >
        <div className="text-center p-10">
          <h1 className="text-2xl font-bold text-primary uppercase">
            Contuct Us
          </h1>
          <h1 className="text-xl text-white">Stay connect with us </h1>
        </div>
        <form className="w-2/4 mx-auto">
          <div>
            <label className="form-control">
              <input
                type="text"
                placeholder="Enter name"
                className="mt-5 input input-bordered input-success"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="Enter Email"
                className="mt-5 input input-bordered input-success w-full"
              />
            </label>
          </div>
          <div className="mt-5  w-full mx-auto">
            <textarea
              className="textarea textarea-bordered form-control w-full"
              placeholder="Massages"
            ></textarea>
          </div>
          <div className="grid justify-items-center">
            <button className="my-5 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
};

export default Contuct;