import React from 'react';
import background from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div
            style={{
                background: `url(${background})`
            }}
            className="hero ">
            <div className=" py-5 lg:py-20 lg:w-2/5">
                <div className='text-center mb-10'>
                    <h3 className='text-xl md:text-2xl text-primary'>Contact Us</h3>
                    <h2 className='text-2xl md:text-4xl text-white'>Stay connected with us</h2>
                </div>
                <div className="card  w-full shadow-2xl  bg-base-100" >
                    <div className="card-body">
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="submit" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;