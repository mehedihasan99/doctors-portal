import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-secondary font-bold text-center text-xl hover:underline underline-offset-4'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid mt-20 grid-cols-1, md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel
                date={date}
                treatment={treatment}
                setTreatment={setTreatment} />}
        </div>
    );
};

export default AvailableAppointment;