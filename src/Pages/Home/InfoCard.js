import React from 'react';

const InfoCard = ({ img, title, bgCard }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgCard} `}>
            <figure className='pl-5'>
                <img src={img} alt='' />

            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;