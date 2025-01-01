import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Verse",
      description:
        "Developed a task management app for college faculty using React, Node.js, Express, MongoDB, and Firebase. Features include task tracking, team collaboration, CRUD operations, and real-time visualization with Recharts and Redux for state management.",
      link: "https://aryan-task-manager-app.netlify.app/log-in",
      iconClass: "fa-solid fa-bars-progress",
    },
    {
      id: 2,
      title: "TrackMyCash",
      description:
        "Engineered an expense tracker app using React, Node.js, and MongoDB. Features include secure JWT authentication, GraphQL schema optimization, CRUD operations, and real-time financial visualization with Chart.js for enhanced user interaction.",
      link: "https://expense-tracker-app-7zig.onrender.com/login",
      iconClass: "fa-solid fa-money-check-dollar",
    },
    {
      id: 3,
      title: "CryptoBucks",
      description:
        "Created CryptoBucks to display cryptocurrency data for 100+ coins, including prices, market caps, and rankings. Includes search, sorting, pagination, and trend analysis, with interactive charts to enhance user insights.",
      link: "https://mycrypto-tracker-app.netlify.app/",
      iconClass: "fa-brands fa-bitcoin",
    },
    {
      id: 4,
      title: "Rent Up",
      description:
        "Built Rent Up, a React-based real estate app, showcasing properties with sorting filters for price and location. Designed with Tailwind CSS for a seamless and responsive user experience.",
      link: "https://github.com/aryanmishra64/Real-Estate-App",
      iconClass: "fa-solid fa-sign-hanging",
    },
    {
      id: 5,
      title: "BuyLoom",
      description:
        "Developed BuyLoom, a full-stack eCommerce app using MERN stack with Redux for state management. Features include JWT authentication, cart functionality, and category sorting for an enhanced shopping experience.",
      link: "https://github.com/aryanmishra64/ecommerce-backend",
      iconClass: "fa-solid fa-cart-shopping",
    },
    {
      id: 6,
      title: "CineView",
      description:
        "Created CineView to fetch and display movie data, including posters and detailed information. Designed with HTML, CSS, and JavaScript, it offers an intuitive interface and an engaging movie-browsing experience.",
      link: "https://github.com/aryanmishra64/movie-app",
      iconClass: "fa-solid fa-film",
    },
    {
      id: 7,
      title: "To-Do List",
      description:
        "Built a To-Do List application using HTML, CSS, and JavaScript to help users organize and manage tasks effectively with an intuitive design.",
      link: "https://github.com/aryanmishra64/to-do-list",
      iconClass: "fa-solid fa-list",
    },
    {
      id: 8,
      title: "Calculator",
      description:
        "Created a basic calculator app with HTML, CSS, and JavaScript, providing essential arithmetic functionalities in a clean and user-friendly interface.",
      link: "https://github.com/aryanmishra64/calculator",
      iconClass: "fa-solid fa-calculator",
    },
  ];

  return (
    <div className="bg-dark text-white py-14 min-h-screen">
      <h1 className="text-5xl font-bold text-center underline text-shadow">
        Projects
      </h1>
      <div className="px-10 flex flex-wrap gap-5 mt-12 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer hover:bg-gray-800 bg-slate-800 p-5 text-center shadow-lg rounded-xl space-y-3 w-[300px] transition duration-300 project-card"
          >
            <i className={`text-5xl ${project.iconClass} icon-glow`}></i>
            <h1 className="text-4xl title-glow">{project.title}</h1>
            <p className="h-[100px] overflow-hidden">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg"
            >
              Check
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
