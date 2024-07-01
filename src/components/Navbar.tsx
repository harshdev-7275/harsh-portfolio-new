"use client";
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import { MdWork } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="min-w-full lg:h-[100px] mx-auto text-black">
      <div className="flex items-center flex-wrap max-w-full justify-center gap-5 md:gap-20 ">
        <Link
          className={
            pathname === "/"
              ? `cursor-pointer scale-105 w-[80px] transition-transform shadow-md rounded-md border-2 border-gray-400 shadow-black p-2`
              : `cursor-pointer hover:scale-105 w-[80px] transition-transform hover:shadow-lg rounded-md hover:border-2 border-gray-400 shadow-gray-700 p-2`
          }
          href="/"
        >
          <FaHome size={60} />
        </Link>
        <Link
          className={
            pathname === "/about"
              ? `cursor-pointer scale-105 w-[80px] transition-transform shadow-md rounded-md border-2 border-gray-400 shadow-black p-2`
              : `cursor-pointer hover:scale-105 w-[80px] transition-transform hover:shadow-lg rounded-md hover:border-2 border-gray-400 shadow-gray-700 p-2`
          }
          href="/about"
        >
          <FaUserAlt size={60} />
        </Link>
        <Link
          className={
            pathname === "/tech"
              ? `cursor-pointer scale-105 w-[80px] transition-transform shadow-md rounded-md border-2 border-gray-400 shadow-black p-2`
              : `cursor-pointer hover:scale-105 w-[80px]  transition-transform hover:shadow-lg rounded-md hover:border-2 border-gray-400 shadow-gray-700 p-2`
          }
          href="/tech"
        >
          <FaLaptopCode size={60} />
        </Link>
        <Link
          className={
            pathname === "/projects"
              ? `cursor-pointer scale-105 transition-transform w-[80px] shadow-md rounded-md border-2 border-gray-400 shadow-black p-2`
              : `cursor-pointer hover:scale-105 transition-transform w-[80px] hover:shadow-lg rounded-md hover:border-2 border-gray-400 shadow-gray-700 p-2`
          }
          href="/projects"
        >
          <MdWork size={60} />
        </Link>
        <Link
          className={
            pathname === "/contact-us"
              ? `cursor-pointer scale-105 transition-transform w-[80px] shadow-md rounded-md border-2 border-gray-400 shadow-black p-2`
              : `cursor-pointer hover:scale-105 transition-transform w-[80px] hover:shadow-lg rounded-md hover:border-2 border-gray-400 shadow-gray-700 p-2`
          }
          href="/contact-us"
        >
          <MdContacts size={60} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
