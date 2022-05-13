import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Appointment = () => {
    return (
        <section
            style={
                {
                    background: `url(${appointment})`
                }
            }
            className='flex  justify-center items-center'>
            <div className='flex-1 mt-[-150px] hidden lg:block'>
                <img src={doctor} alt='' />
            </div>
            <div className='flex-1 p-5 md:p-0'>
                <h4 className='text-xl text-primary font-bold'>Appointment</h4>
                <h3 className='text-3xl text-white'>Make an appointment Today</h3>
                <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Start</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;