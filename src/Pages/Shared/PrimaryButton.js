import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <div>
                <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
            </div>
        </div>
    );
};

export default PrimaryButton;