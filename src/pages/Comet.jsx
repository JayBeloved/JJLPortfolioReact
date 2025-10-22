import React from 'react';
import Navbar from '../components/Navbar';
import CometPage from '../components/Comet';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Comet = () => {
    return (
      <>
        <Navbar />
        <CometPage />
        <Contact />
        <Footer />
      </>
    );
  };
  
  export default Comet;