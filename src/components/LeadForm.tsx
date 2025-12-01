import React, { useState } from 'react';

const LeadForm = () => {
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    mobileNo: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const api = "http://localhost:3000/api/v1";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/form/contactForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error:", data.message || "Something went wrong");
        alert(data.message || "Failed to submit form");
        return;
      }

      console.log("Form submitted successfully:", data);
      alert("Form submitted successfully!");

      setformdata({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        mobileNo: "",
        message: ""
      })
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 mb-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
      
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-pink-600 text-3xl font-serif font-bold mb-4">
            Start your Journey with Ring Marketing
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            Let’s dive into your ideas, achieve your goals with precision, and design tailored strategies
            that fit your needs. We’ll work with you to set clear expectations, goals, and metrics to ensure
            meaningful growth for your brand.
          </p>
        </div>

    
        <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 border border-pink-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formdata.firstName}
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formdata.lastName}
                placeholder="Enter your last name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formdata.email}
                placeholder="Enter your email address"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium text-gray-600 mb-1">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                name="companyName"
                onChange={handleChange}
                value={formdata.companyName}
                placeholder="Enter your company name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                name="mobileNo"
                onChange={handleChange}
                value={formdata.mobileNo}
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                onChange={handleChange}
                value={formdata.message}
                placeholder="Write your message..."
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
