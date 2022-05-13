import React from 'react';
import Fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import Teeth from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';
const OurServices = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Teeth
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Cavity
        }
    ]
    return (
        <div className='my-28 text-center'>
            <div>
                <h3 className='text-primary font-bold text-xl uppercase'>Our Services</h3>
                <h2 className='text-4xl	mt-5'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='sm:mt-[-300px] lg:mt-[100px]'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col md:flex-row">
                        <img src={treatment} className=" w-[458px] md:max-w-sm  rounded-lg shadow-2xl" />
                        <div className='pr-0 md:pr-28 md:pl-10 pl-0'>
                            <h1 className="text-1xl md:text-5xl font-bold text-left">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6 text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <div className='flex flex-start'>
                                <PrimaryButton>GET STARTED</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;