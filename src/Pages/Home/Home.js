import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Care from './Care';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;