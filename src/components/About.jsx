import { useState } from "react";
import bannerImage from "../assets/pic.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const data = {
    image: bannerImage,
    title: "Full Stack Web Developer",
    desc1: `
      Hi, I'm Aryan Mishra! Currently, I am pursuing Electronics and Communication Engineering at IIIT Bhopal. I am a passionate full-stack developer who thrives on creating innovative solutions using the MERN stack. I am also deeply committed to sharpening my problem-solving skills.`,
    highlights: [
      "Hands-on experience in building dynamic, user-friendly web applications.",
      "Adept in designing robust backends and responsive frontends using the MERN stack.",
      "Strong foundation in data structures and algorithms, solving 600+ problems across platforms like LeetCode, GeeksforGeeks, CodeChef, and Codeforces.",
      "Excels in teamwork and collaboration, contributing effectively to dynamic projects.",
    ],
    desc2: showMore
      ? `
      Outside of coding, I have diverse interests that keep me inspired:
      - **Sports Enthusiast**: Badminton is my favorite way to stay active and competitive.
      - **Music Lover**: Playing the guitar and exploring new music genres are my favorite pastimes.
      - **Bookworm**: I enjoy reading books that expand my knowledge and creativity.
      My journey as a developer has been fueled by curiosity, discipline, and a love for learning. I am eager to grow further in this exciting field!`
      : "Click the button below to learn more about my journey and passions.",
    actionButton: {
      title: showMore ? "Show Less" : "Read More..",
    },
  };

  return (
    <div className="relative bg-dark text-white min-h-screen flex flex-col justify-center py-16 overflow-hidden">
      {/* Background gradient and glowing patches */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark to-black overflow-hidden">
        {/* Glowing patches */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-glow rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-1/4 h-1/4 bg-glow rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 space-y-16">
        <h1 className="text-center text-5xl underline font-bold">About Me</h1>

        <div className="flex flex-wrap items-center gap-16 lg:flex-nowrap">
          {/* Image container */}
          <div className="flex justify-center w-full lg:w-1/3">
            <img
              className="rounded-full shadow-lg w-64 h-64 object-cover animate-pulse"
              src={data.image}
              alt="Aryan Mishra"
            />
          </div>

          {/* Text container */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold">{data.title}</h1>
              <p className="text-lg">{data.desc1}</p>
              <ul className="list-disc list-inside text-lg space-y-2">
                {data.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <p className="text-lg">{data.desc2}</p>
              <button
                className="bg-orange-500 px-5 py-2 text-xl rounded-full shadow-lg hover:bg-orange-600 transition"
                onClick={handleReadMore}
              >
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
