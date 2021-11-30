import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
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
        <Footer></Footer>
        </div>
    );
};

export default Home;