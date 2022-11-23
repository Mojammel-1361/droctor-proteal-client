
import chair from '../../../assets/images/chair.png'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';
import bg from "../../../assets/images/bg.png";
import ObjectFitCover from 'react-object-fit-cover';

const AppointmentBanner = ({selectDate, setSelectDate}) => {
 
    return (
      <header className='py-9'
      style={
        {
          
          objectFit: ObjectFitCover,
          background: `url(${bg})`,
        
        }
      }
      >
        <div className="hero m-9">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <DayPicker
                mode="single"
                selected={selectDate}
                onSelect={setSelectDate}
              />
              <p>You picked: {format(selectDate, "PP")}.</p>
            </div>
          </div>
        </div>
      </header>
    );
};

export default AppointmentBanner;