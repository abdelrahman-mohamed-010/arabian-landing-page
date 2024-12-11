"use client";
import React, { useState } from "react";

const ContactForm = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here (e.g., API call).
  };

  return (
    <section className="text-white px-4 lg:px-28 border-b border-[#FFFFFF] pb-10 md:pb-20 mt-10 flex flex-col justify-center">
      <h1 className="text-xl md:text-2xl mb-4 text-center">
        {translations.form.title}
      </h1>
      <h2 className="text-base md:text-lg mb-6 md:mb-8 text-center px-4">
        {translations.form.desc}
      </h2>

      <form
        className="w-full md:w-auto p-4 md:p-8 rounded-lg shadow-lg flex flex-col gap-4 md:gap-5 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-[634px]">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder={translations.form.name}
            onChange={handleChange}
            className="w-full lg:w-[634px] p-3 bg-black border-b text-white focus:outline-none"
            required
          />
        </div>

        <div className="w-full max-w-[634px]">
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={translations.form.phone}
            className="w-full lg:w-[634px] p-3 bg-black border-b text-white focus:outline-none"
            required
          />
        </div>

        <div className="w-full max-w-[634px]">
          <input
            type="email"
            id="email"
            name="email"
            placeholder={translations.form.email}
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-[634px] p-3 bg-black border-b text-white focus:outline-none"
            required
          />
        </div>

        <div className="w-full max-w-[634px] mt-4 md:mt-8">
          <textarea
            id="message"
            name="message"
            placeholder={translations.form.send_message}
            value={formData.message}
            onChange={handleChange}
            rows="7"
            className="w-full resize-none lg:w-[634px] p-3 bg-black border text-white focus:outline-none"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit rounded-2xl py-2 md:py-3 px-4 md:px-6 bg-white text-[#D45B2B] focus:outline-none text-sm md:text-base"
          >
            {translations.form.submit_button}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
