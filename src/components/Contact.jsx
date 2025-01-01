import React from "react";

const Contact = () => {
  return (
    <div className="contact-container bg-dark text-white py-16 relative overflow-hidden min-h-screen">
      {/* Dark background with glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark to-black overflow-hidden">
        {/* Glowing patches */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-glow rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-1/4 h-1/4 bg-glow rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Contact section content */}
      <h1 className="text-5xl font-bold underline text-center mb-8 z-10 relative">Contact</h1>
      <p className="text-center text-lg mb-12 z-10 relative">
        Any questions or remarks? Just write a message!
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-10 relative z-10">
        {/* Left Section */}
        <div className="contact-info space-y-6 text-left">
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-phone text-3xl"></i>
            <span className="text-xl">+91 9305105669</span>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-envelope text-3xl"></i>
            <span className="text-xl">aryanmishraro6464@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-location-dot text-3xl"></i>
            <span className="text-xl">Bhopal, Madhya Pradesh, India</span>
          </div>
          <div className="flex space-x-4 mt-6">
            <a
              href="mailto:aryanmishraro6464@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-600 transition"
            >
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
            <a
              href="https://github.com/aryanmishra64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-600 transition"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-mishra-640751247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-600 transition"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <form className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-lg w-full lg:w-1/2">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-white">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium text-white">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded-lg"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-white">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded-lg"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white text-lg px-6 py-2 rounded-lg w-full hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
