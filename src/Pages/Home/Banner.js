import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const bgStyle = {
    backgroundImage: `url(${bg})`
}

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12" style={bgStyle}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='a dentist chair' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem magni ut architecto eius nisi, adipisci accusamus ullam, illo earum error? Culpa corrupti in magni voluptatem est? Quod, voluptate numquam.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;