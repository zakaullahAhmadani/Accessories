import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for contacting us!");
  };

  return (
    <form className="space-y-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input type="text" name="name" onChange={handleChange} required
          className="w-full border border-gray-300 p-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input type="email" name="email" onChange={handleChange} required
          className="w-full border border-gray-300 p-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Subject</label>
        <input type="text" name="subject" onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea name="message" rows="5" onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"></textarea>
      </div>
      <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
