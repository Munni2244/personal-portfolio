import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <h1>this is home</h1>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects/>
            <ContactMe></ContactMe>

        </div>
    );
};

export default Home;