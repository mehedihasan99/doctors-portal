import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-xl font-bold text-secondary">{name}!</h2>
                <p>
                    {
                        slots.length ? <space>{slots[0]}</space> : <space className='text-red-400'>Try another day</space>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-secondary btn-sm bg-gradient-to-r from-secondary to-primary text-white uppercase">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;