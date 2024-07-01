import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineWoman } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Project from "@/components/Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Code-Sync",
      desc: "Code Sync is a comprehensive learning management system featuring a built-in code compiler, designed to facilitate interactive programming education and assessment.",
      link: "https://github.com/harshdev-7275/code-sync",
      icon: <FaLaptopCode size={60} />,
    },
    {
      id: 2,
      title: "Nav-Naari",
      desc: "NavNaari is a job seeking platform tailored for women, aiming to empower and connect them with job opportunities. It provides a user-friendly interface for job search and application processes, emphasizing inclusivity and career advancement.",
      link: "https://github.com/harshdev-7275/Nav-Naari",
      icon: <MdOutlineWoman size={60} />,
    },
    {
      id: 3,
      title: "Tap-Tap",
      desc: "Tap-Tap is a JavaScript-based typing game designed for users to enhance their typing skills through interactive gameplay, featuring HTML and CSS for frontend styling and functionality.",
      link: "https://github.com/harshdev-7275/tap-tap-game",
      icon: <FaKeyboard size={60} />,
    },
    {
      id: 4,
      title: "Find-it",
      desc: "Findit is a web-based search engine utilizing the Reddit API, designed to provide users with streamlined access to Reddit's vast repository of content, tailored for efficient and targeted searches.",
      link: "https://github.com/harshdev-7275/findit",
      icon: <FaSearch size={60} />,
    },
  ];

  return (
    <div className="text-black max-w-full mx-auto min-h-full mt-10 lg:mt-40">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 mx-auto">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.desc}
            link={project.link}
            icon={project.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
