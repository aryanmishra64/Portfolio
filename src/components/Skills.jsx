import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaBootstrap,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiOwasp,
} from "react-icons/si";
import { useState } from "react";

const skills = [
  { icon: <SiCplusplus title="C++" />, color: "from-purple-500 to-pink-500" },
  { icon: <FaReact title="ReactJS" />, color: "from-blue-500 to-blue-400" },
  { icon: <FaNodeJs title="NodeJS" />, color: "from-green-500 to-green-400" },
  { icon: <SiMongodb title="MongoDB" />, color: "from-gray-800 to-gray-600" },
  { icon: <SiMysql title="MySQL" />, color: "from-yellow-500 to-yellow-400" },
  { icon: <FaCss3Alt title="CSS" />, color: "from-indigo-500 to-indigo-400" },
  { icon: <SiTailwindcss title="Tailwind CSS" />, color: "from-teal-500 to-teal-400" },
  { icon: <SiTypescript title="TypeScript" />, color: "from-gray-500 to-gray-400" },
  { icon: <SiJavascript title="JavaScript" />, color: "from-orange-500 to-orange-400" },
  { icon: <FaBootstrap title="Bootstrap" />, color: "from-purple-600 to-purple-400" },
  { icon: <SiNextdotjs title="Next.js" />, color: "from-gray-700 to-gray-500" },
  { icon: <FaJava title="Java" />, color: "from-red-500 to-red-400" },
  { icon: <SiOwasp title="OOPS" />, color: "from-pink-600 to-pink-400" },
  { icon: <SiRedux title="Redux" />, color: "from-purple-500 to-indigo-500" },
  { icon: <SiExpress title="Express.js" />, color: "from-gray-700 to-gray-500" },
  { icon: <FaGitAlt title="Git" />, color: "from-orange-600 to-orange-400" },
  { icon: <FaGithub title="GitHub" />, color: "from-gray-800 to-gray-500" },
  { icon: <FaPython title="Python" />, color: "from-yellow-600 to-yellow-400" },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerPage = 6;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + skillsPerPage) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - skillsPerPage + skills.length) % skills.length);
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between py-10 px-5 text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      id="skills-section"
    >
      {/* Scoped Glowing Effect */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-glow rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-1/4 h-1/4 bg-glow rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none z-0" />

      {/* First block */}
      <div className="relative z-10 w-full md:w-1/2 space-y-5">
        <h1 className="text-4xl font-bold mb-4">Technologies I Work With</h1>
        <p className="text-lg">
          I have experience with a wide range of modern technologies for building frontend,
          backend, and full-stack applications. Here are some of the tools and technologies I use:
        </p>
      </div>

      {/* Second block */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center">
        <div className="flex items-center justify-center space-x-4 mb-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="text-2xl font-bold bg-gray-700 rounded-full p-2 hover:bg-gray-600"
          >
            &lt;
          </button>

          {/* Skills Icons Grid */}
          <div className="grid grid-cols-3 gap-4">
            {skills.slice(currentIndex, currentIndex + skillsPerPage).map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${skill.color} rounded-lg p-6 flex items-center justify-center hover:scale-110 transition-transform`}
              >
                {skill.icon}
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="text-2xl font-bold bg-gray-700 rounded-full p-2 hover:bg-gray-600"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

