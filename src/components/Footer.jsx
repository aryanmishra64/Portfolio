import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white border-t border-gray-700">
      <div className="text-center">
        <p className="text-lg">
          Designed and Developed by <strong>Aryan Mishra</strong> | All Rights Reserved © 2025
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/aryanmishra64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition duration-300"
          >
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-mishra-640751247/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition duration-300"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a
            href="mailto:aryanmishraro6464@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition duration-300"
          >
            <i className="fa-solid fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
