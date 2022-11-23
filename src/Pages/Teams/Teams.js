import React from 'react';
import teams from '../../assets/images/treatment.png'

const Teams = () => {
    return (
      <div className="mt-7">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">About our Experience</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <div className=" mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                  Get Start
                </button>
              </div>
            </div>
            <div className="card  w-full max-w-md ">
              <div className="card-body">
                <div className="form-control">
                  <img src={teams} className='' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

            
export default Teams;