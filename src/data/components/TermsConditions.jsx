import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Terms & Conditions</h1>
      
      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to our website. These terms and conditions outline the rules and regulations for the use of our platform.
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree with all of the terms stated on this page.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. License</h2>
          <p>
            Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
            You may access this from our site for your own personal use, subject to restrictions set in these terms and conditions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Restrictions</h2>
          <p>You are specifically restricted from the following:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing or commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is damaging or unlawful</li>
            <li>Engaging in any data mining, data harvesting, or similar activity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Your Privacy</h2>
          <p>Please read our <a href="/privacy-policy" className="text-yellow-600 underline hover:text-yellow-800">Privacy Policy</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            In no event shall we, nor any of our officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            We are permitted to revise these Terms at any time as we see fit, and by using this website you are expected to review these Terms on a regular basis.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
