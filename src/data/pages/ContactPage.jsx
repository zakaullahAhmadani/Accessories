import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoreLocator from '../components/StoreLocator';

import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
     

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Please fill out the form below.
        </p>
        <ContactForm />
      </div>
 <div className="bg-gray-50 py-10">
        <StoreLocator />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
