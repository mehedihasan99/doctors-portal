import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // -------------- react query user ar jonno ata baad---
    // const [services, setServices] = useState([]);
    // -------------------------------------------------
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()));

    if (isLoading) {
        return <isLoading />
    }
    // -------------- react query user ar jonno ata baad---
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    // -----------------------------------------------
    return (
        <div>
            <h4 className='text-secondary font-bold text-center text-xl hover:underline underline-offset-4'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid mt-20 grid-cols-1, md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel
                date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment} />}
        </div>
    );
};

export default AvailableAppointment;