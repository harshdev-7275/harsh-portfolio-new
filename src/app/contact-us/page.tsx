"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
        emailjs
        .sendForm("service_tjpvckq", "template_q2d5g01", formRef.current, {
          publicKey: "O6yiD1XJOaH58WRGQ",
        })
        .then(
          (result) => {
            // setSuccess(true);
            toast.success('Email sent successfully!');
            formRef?.current?.reset();
          },
          (error) => {
            console.log(error);
            // setError(true);
            toast.error('Something went wrong!');
            formRef?.current?.reset();
          }
        );
    }
  };

  return (
    <div className="text-black min-h-screen max-w-full mx-auto pt-16">
      <div className="container mx-auto w-full h-full flex flex-col md:flex-row items-center justify-between gap-7 md:gap-[15rem]">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl text-center md:text-start md:text-9xl font-bold w-[500px]">Let's Work Together</h1>
          <div className="flex flex-row mt-7 gap-10">
            <Link
              href={"https://github.com/harshdev-7275?tab=repositories"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black hover:text-white p-4 rounded-md transition-all delay-75"
            >
              <FaGithub size={60} />
            </Link>
            <Link
              href={"https://x.com/harsh_sing72983"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black hover:text-white p-4 rounded-md transition-all delay-75"
            >
              <FaXTwitter size={60} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/harsh-singh-bba9a7253/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black hover:text-white p-4 rounded-md transition-all delay-75"
            >
              <FaLinkedinIn size={60} />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <form ref={formRef} onSubmit={sendEmail} className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              className="border p-2 rounded"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="border p-2 rounded"
            />
            <textarea
              rows={8}
              required
              placeholder="Message"
              name="message"
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded hover:bg-gray-700 transition-all delay-75"
            >
              Submit
            </button>
            {error && <p className="text-red-500 mt-2">Error sending message.</p>}
            {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
