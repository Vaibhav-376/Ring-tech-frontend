import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Building2, Phone } from "lucide-react";
import MeetingScheduler from "../components/Meetingscheduler";

const Contact = () => {
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    mobileNo: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const api = "http://localhost:3000/api/v1";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/form/contactForm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to submit form");
        return;
      }

      alert("Form submitted successfully!");
    } catch {
      alert("Error submitting form");
    }
  };

  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 min-h-screen px-6 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto">

  
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold text-center text-gray-900"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-pink-600 text-xl font-medium mt-4"
        >
          Your First Step to Success Starts Here
        </motion.p>


        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 w-32 h-1 bg-pink-400 rounded-full origin-left"
        />

     
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14 backdrop-blur-xl bg-white/70 shadow-2xl border border-pink-100 rounded-3xl p-10"
        >
          <form className="space-y-7" onSubmit={handleSubmit}>
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                value={formdata.firstName}
                onChange={handleChange}
                icon={<User size={18} />}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formdata.lastName}
                onChange={handleChange}
                icon={<User size={18} />}
              />
            </div>

         
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formdata.email}
              onChange={handleChange}
              icon={<Mail size={18} />}
            />

        
            <InputField
              label="Company Name"
              name="companyName"
              value={formdata.companyName}
              onChange={handleChange}
              icon={<Building2 size={18} />}
            />

           
            <InputField
              label="Phone Number"
              name="mobileNo"
              value={formdata.mobileNo}
              onChange={handleChange}
              icon={<Phone size={18} />}
            />

           
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                value={formdata.message}
                onChange={handleChange}
                className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-400 transition shadow-sm hover:shadow-md"
              ></textarea>
            </div>

       
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg text-lg tracking-wide"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

  
        <div className="mt-20">
          <MeetingScheduler />
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: any) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <div className="relative flex items-center">
      <span className="absolute left-4 text-gray-400">{icon}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
        value={value}
        onChange={onChange}
        className="border border-gray-300 bg-white/60 rounded-xl pl-11 pr-4 py-3 w-full 
        focus:ring-2 focus:ring-pink-400 transition shadow-sm hover:shadow-md"
      />
    </div>
  </div>
);

export default Contact;
