import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoin from '../../../assets/images/appointment.png'
const MacAppoiment = () => {
    return (
      <section
        style={{
          
          backgroundImage: `url(${appoin})`,
      
        }}
      >
        <div className="hero mt-11">
          <div className="hero-content flex-col  lg:flex-row">
            <img
              src={doctor}
              className="lg:w-1/2 hidden lg:block -mt-32 rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Appointment</h1>
              <h1 className="text-4xl font-bold text-white">
                Mack in Appointment today
              </h1>
              <p className="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MacAppoiment;