import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Contact from '../Contact/Contact';
import Dental from '../Dental/Dental';
import PatientsSays from '../PatientsSays/PatientsSays';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Services></Services>
            <Dental></Dental>
            <AppointmentBanner></AppointmentBanner>
            <PatientsSays></PatientsSays>
            <Contact></Contact>
        </div>
    );
};

export default Home;