"use client";
import React, { useEffect, useState } from "react";
import { GiArrowCursor } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";

import TechCard from "@/components/TechCard";

const Tech = () => {
  const [coding, setCoding] = useState(true);
  const [soft, setSoft] = useState(false);
  const [skills, setSkills] = useState("frontend");
  const codingskills = ["frontend", "backend", "website", "deploy", "git"];
  const softskills = ["collaboration", "communication", "adaptability", "time", "problem", "creativity"];

  const codingClickHandler = (e) => {
    e.preventDefault();
    setCoding(true);
    setSoft(false);
  };

  const softClickHandler = (e) => {
    e.preventDefault();
    setCoding(false);
    setSoft(true);
  };

  function randomNumberBetween1and5() {
    return Math.floor(Math.random() * 5);
  }

  useEffect(() => {
    if (coding) {
      setSkills(codingskills[randomNumberBetween1and5()]);
    } else if (soft) {
      setSkills(softskills[randomNumberBetween1and5()]);
    }
  }, [coding, soft]); // Add coding and soft to the dependency array

  return (
    <div className="text-black min-h-full max-w-full mx-auto pt-16 lg:overflow-y-hidden">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-10">
          <button
            className={
              coding
                ? "transition-all delay-100 bg-black text-white w-[200px] rounded-md py-3 px-4 hover:shadow-md border border-gray-500 font-bold"
                : "transition-all delay-100 text-gray-400 w-[200px] rounded-md py-3 px-4 hover:shadow-md border border-gray-500 font-bold"
            }
            onClick={codingClickHandler}
          >
            Coding Skills
          </button>
          <button
            className={
              soft
                ? "transition-all delay-100 bg-black text-white w-[200px] rounded-md py-3 px-4 hover:shadow-md border border-gray-500 font-bold"
                : "transition-all delay-100 text-gray-400 w-[200px] rounded-md py-3 px-4 hover:shadow-md border border-gray-500 font-bold"
            }
            onClick={softClickHandler}
          >
            Soft Skills
          </button>
        </div>
        <div className="mt-10 text-black grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {coding && (
            <>
              <TechCard
                title="Frontend Development"
                description="I bring ideas to life in the browser coding from scratch."
                icon={<GiArrowCursor size={60} />}
                isActive={skills === "frontend"}
                onClick={() => setSkills("frontend")}
              />
              <TechCard
                title="API Development"
                description="Crafting robust APIs turning ideas into functional solutions."
                icon={<FaPuzzlePiece size={60} />}
                isActive={skills === "api"}
                onClick={() => setSkills("api")}
              />
              <TechCard
                title="Backend Development"
                description="Building powerful server-side systems that scale."
                icon={<FaCode size={60} />}
                isActive={skills === "backend"}
                onClick={() => setSkills("backend")}
              />
              <TechCard
                title="Web Applications"
                description="Creating dynamic and intuitive web experiences."
                icon={<CgWebsite size={60} />}
                isActive={skills === "website"}
                onClick={() => setSkills("website")}
              />
              <TechCard
                title="Deployments & Hosting"
                description="Ensuring smooth deployments and reliable hosting for web applications."
                icon={<FaServer size={60} />}
                isActive={skills === "deploy"}
                onClick={() => setSkills("deploy")}
              />
              <TechCard
                title="Versioning"
                description="Tracks changes, aids collaborative software development."
                icon={<FaGitAlt size={60} />}
                isActive={skills === "git"}
                onClick={() => setSkills("git")}
              />
            </>
          )}
          {soft && (
            <>
              <TechCard
                title="Communication"
                description="Effective exchange of information and ideas."
                icon={<TiMessages size={60} />}
                isActive={skills === "communication"}
                onClick={() => setSkills("communication")}
              />
              <TechCard
                title="Collaboration"
                description="Working effectively in a team environment."
                icon={<IoIosPeople size={60} />}
                isActive={skills === "collaboration"}
                onClick={() => setSkills("collaboration")}
              />
              <TechCard
                title="Adaptability"
                description="Flexibility to embrace change and new technology."
                icon={<FaArrowRightArrowLeft size={60} />}
                isActive={skills === "adaptability"}
                onClick={() => setSkills("adaptability")}
              />
              <TechCard
                title="Time Management"
                description="Efficiently managing and prioritizing tasks."
                icon={<FaClock size={60} />}
                isActive={skills === "time"}
                onClick={() => setSkills("time")}
              />
              <TechCard
                title="Problem Solving"
                description="Analytical thinking to resolve challenges."
                icon={<MdSyncProblem size={60} />}
                isActive={skills === "problem"}
                onClick={() => setSkills("problem")}
              />
              <TechCard
                title="Creativity"
                description="Generating innovative solutions and ideas."
                icon={<FaLightbulb size={60} />}
                isActive={skills === "creativity"}
                onClick={() => setSkills("creativity")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tech;
