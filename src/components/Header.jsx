import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "/", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skills", link: "/skills", id: 3 },
    { title: "Projects", link: "/projects", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ]);

  const resumeLink = "https://drive.google.com/file/d/1W5RSSd6tnvD7k0NDXFvWS_ndCERaY6PO/view";

  return (
    <div className="h-20 flex justify-between items-center px-16 bg-dark bg-cover bg-no-repeat bg-fixed text-white">
      <div>
        <h1 className="text-2xl font-bold">Aryan Mishra</h1>
      </div>
      <div className="space-x-6">
        {menuLinks.map((link) => (
          <Link key={link.id} to={link.link} className="hover:text-orange-500 transition duration-300">
            {link.title}
          </Link>
        ))}
      </div>
      <div>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-glow text-1xl transition duration-300 hover:bg-orange-600 rounded-full">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
