import React from 'react';
import AboutUs from '../components/AboutUs';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
     
    
      <TeamSection />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Vision</h1>
        <p className="text-center text-gray-600 mb-10">
          We are dedicated to providing the best accessories for your style and comfort.
        </p>
      </div>
        <AboutUs />
      <Footer />
    </>
  );
};

export default AboutPage;
