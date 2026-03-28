import React from "react";
import ContentGenerator from "../assets/ContentGenerator.jpg";
import DashBoard from "../assets/dashBoard.jpg";
import eCommerceProject from "../assets/eCommerceProject.jpg";
import fitnessTrackor from "../assets/fintnessTrackor.jpg";
import loremipsumdolor from "../assets/loremipsumdolor.png";
import taskmanagement from "../assets/taskmanagement.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { Github, Link } from "lucide-react";

const Projects = ({ DarkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce platform",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: eCommerceProject,
      tags: ["react", "tailwind"],
    },
    {
      id: 2,
      title: "content Generator",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: ContentGenerator,
      tags: ["python", "node.js", "mongoDB"],
    },
    {
      id: 3,
      title: "Fintness Tracker App",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: fitnessTrackor,
      tags: ["python", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "DashBoard",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: DashBoard,
      tags: ["react", "tailwind", "vite"],
    },
    {
      id: 5,
      title: "Task management",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: taskmanagement,
      tags: ["Laravel", "vue.js", "vite"],
    },
    {
      id: 6,
      title: "lorem ipsum dolor",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: loremipsumdolor,
      tags: ["Next.js", "tailwind", ""],
    },
  ];
  return (
    <section
      id="projects"
      style={{ backgroundColor: DarkMode ? "#101829" : "#f9fafb" }}
      className="relative py-24 "
    >
      <div className="container mx-auto px-4">
        <div
          className="text-center sm:text-4xl font-bold mb-3 "
          style={{ color: DarkMode ? "white" : "#1f2937" }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 "
            style={{
              color: DarkMode ? "white" : "#1f2937",
            }}
          >
            {" "}
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right,#f97316,#f59e0b) ",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-x-xl mx-auto "
            style={{
              color: DarkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 ">
          {projects.map((project, index) => (
            <div
              className=" group rounded-xl border duration-300 hover:border-orange-500/50 transition-all "
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={project.id}
              style={{
                backgroundColor: DarkMode
                  ? "linear-gradient(to right,#1f2937,#111827) "
                  : 'linear gradient(to right,"white","#f9fafb")',
                borderColor: DarkMode ? "#374151" : "#e5e7eb",
              }}
            >
              <div className="h-36 overflow-hidden rounded-t-xl ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: DarkMode ? "white" : "#1f2937" }}
                >
                  {project.title} 
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: DarkMode ? "d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4 ">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: DarkMode ? "#374151" : "#f3f4f6",
                        color: DarkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full z-100 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Raiskhatai"
                    style={{
                      backgroundColor: DarkMode ? "#374151" : "#f3f4f6",
                      color: DarkMode ? "#d1d5db" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors "
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    {" "}
                    <IoLogoGithub /> <span>code</span>
                  </a>

                  <a
                    href="#"
                    style={{
                      background: "linear-gradient(to right,#f97316,#f59e0b)",
                      color: DarkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors "
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    {" "}
                    <Link /> <span>demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/Raiskhatai"
            style={{
              background: "linear-gradient(to right,#f97316,#f59e0b)",
            }}
            className=" inline-flex   items-center  justify-center font-semibold  gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all  "
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Github />
            <span>view all projects</span>
            <link className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
