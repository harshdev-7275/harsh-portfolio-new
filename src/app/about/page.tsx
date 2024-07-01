import React from "react";
import Image from "next/image";
import men2 from "@/assets/men2.png";

import Link from "next/link";

const About = () => {
  return (
    <div className="text-black min-h-screen max-w-full mx-auto pt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="mb-8 md:mb-0 md:mr-8">
          <Image src={men2} width={500} height={500} alt="men" />
        </div>
        <div className="flex-1">
          <p className="text-base text-gray-600 sm:text-lg md:text-xl leading-relaxed">
            I am Harsh Singh, a highly motivated and skilled full-stack
            developer based in Bengaluru, India, currently pursuing a Master of
            Computer Application at PES University with a Bachelor of Computer
            Applications from Babu Banarasi Das University, Lucknow. As a MERN
            stack developer, I am proficient in Java, Python, and TypeScript,
            and experienced with frameworks such as React, Tailwind, Sass, Node,
            Express, and Prisma. I am passionate about applying my technical
            skills to drive innovation and achieve organizational success. I am
            a proactive problem-solver and a dedicated team collaborator, always
            eager to take on dynamic roles that allow me to contribute and grow
            professionally. My projects demonstrate my ability to create
            functional and user-friendly web applications. I am committed to
            making a positive impact and continuously enhancing my skills in
            software development.
          </p>
          <div className="mt-4 flex flex-col md:flex-row items-center gap-10">
            <a
              href="/resume.pdf"
              download="Harsh-Singh"
              className="bg-black font-bold w-full md:w-[200px] flex items-center justify-center text-white py-3 px-4 rounded hover:text-black hover:bg-transparent border-2 transition-all border-black"
            >
              Download Resume
            </a>
            <Link
              href="/contact-us"
              className="bg-white font-bold w-full md:w-[200px] flex items-center justify-center text-black py-3 px-4 rounded hover:text-white hover:bg-black border-2 transition-all border-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
