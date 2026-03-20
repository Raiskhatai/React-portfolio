import React from "react";
import ContentGenerator from "../assets/ContentGenerator.jpg";
import DashBoard from "../assets/dashBoard.jpg";
import eCommerceProject from "../assets/eCommerceProject.jpg";
import fitnessTrackor from "../assets/fitnessTrackor.jpg";
import loremipsumdolor from "../assets/loremipsumdolor.jpg";
import taskmanagement from "../assets/taskmanagement.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce platform",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: { eCommerceProject },
      tags: ["react", "tailwind"],
    },
    {
      id: 2,
      title: "content Generator",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: { ContentGenerator },
      tags: ["python", "node.js", "mongoDB"],
    },
    {
      id: 3,
      title: "Fintness Tracker App",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: { fitnessTrackor },
      tags: ["python", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "DashBoard",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: { DashBoard },
      tags: ["react", "tailwind", "vite"],
    },
    {
      id: 5,
      title: "Task management",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: { taskmanagement },
      tags: ["Laravel", "vue.js", "vite"],
    },
    {
      id: 6,
      title: "lorem ipsum dolor",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, et?            ",
      image: { loremipsumdolor },
      tags: ["Next.js", "tailwind", ""],
    },
  ];
  return <div></div>;
};

export default Projects;
