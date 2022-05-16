import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content md:gap-56 flex-col lg:flex-row-reverse">
                <img src={chair} className="w-80 md:w-[500px] rounded-lg shadow-2xl" alt='' />
                <div >
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;