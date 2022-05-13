import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-full rounded-lg max-w-lg rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">Your New Smile Start Here</h1>
                        <p className="py-6 md:mr-32">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Start</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;