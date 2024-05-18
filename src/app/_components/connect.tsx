import React from "react";
import Link from "next/link";
import { FacebookIcon } from "./app_icons";
import { Reddit } from "./app_icons";
import { Twitter } from "./app_icons";
import { Discord } from "./app_icons";
export const Connect = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-16 px-5 lg:px-16 mb-16">
        <div className="flex flex-col w-full lg:max-w-[30rem] space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="rounded border border-gray-400 py-2 px-5"
            required
          />
          <input
            type="Email"
            placeholder="Email"
            className="rounded border border-gray-400 py-2 px-5"
            required
          />
          <input
            type="text"
            placeholder="Your website (if exists)"
            className="rounded border border-gray-400 py-2 px-5"
            required
          />
          <textarea
            id="message"
            name="message"
            rows={3}
            className="border border-gray-400 p-5 rounded-lg"
            cols={50}
            placeholder="Enter your message here..."
          ></textarea>
          <div className="flex items-center justify-between">
            <button className="bg-black text-white font-bold px-3 h-14 rounded text-lg">
              Get In Touch
            </button>
            <Link
              href=""
              className="flex items-center justify-center  rounded-sm h-14 w-14"
            >
              <FacebookIcon />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center border-2 border-black rounded h-14 w-14"
            >
              <Reddit />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center border-2 border-black rounded h-14 w-14"
            >
              <Twitter />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center border-2 border-black rounded h-14 w-14"
            >
              <Discord />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-3xl lg:text-4xl font-black lg:max-w-sm ">
            Let's{" "}
            <b
              className=" text-white font-black"
              style={{ WebkitTextStroke: "2px black" }}
            >
              {" "}
              talk
            </b>{" "}
            for Something special
          </h1>
          <h2 className="text-gray-400 lg:max-w-lg py-5">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </h2>

          <Link
            href="mailto:Sodiqsheriff9@gmail.com"
            className=" cursor-pointer hover:underline font-bold text-xl"
          >
            Email me
          </Link>
          <h1 className="font-bold text-xl pt-2">+2347041208889</h1>
        </div>
      </div>
    </>
  );
};
