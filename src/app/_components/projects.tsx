"use client";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
export function Project() {
  return (
    <>
      <div className="bg-black px-5 pt-5 mt-7 pb-8 lg:px-12">
        <h2 className="text-3xl text-center lg:text-4xl font-normal text-white">
          My<b className="font-black"> Projects</b>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 items-center gap-16 w-full h-full">
          <div
            className="flex flex-col h-[25rem] bg-contain bg-center rounded-lg lg:max-w-[40rem]"
            style={{ backgroundImage: "url(/assets/billz.png)" }}
          ></div>
          <div className="flex flex-col text-white">
            <h1 className="text-3xl lg:text-4xl font-black ">01</h1>
            <h3 className="text-2xl lg:text-4xl font-bold py-8">
              Billz Web App
            </h3>
            <h5 className="lg:text-sm text-gray-500">
              I'm Sodiq Sheriff Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </h5>
            <Link
              href="https://billzlandingpage.vercel.app/"
              target="_blank"
              className="flex items-center gap-1 pt-5 text-gray-400 hover:text-2xl hover:text-orange-500"
            >
              Billz <MdArrowOutward className="text-white text-lg " />
            </Link>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-3xl lg:text-4xl font-black ">02</h1>
            <h3 className="text-2xl lg:text-4xl font-bold py-8">
              Fx Restaurant Web App
            </h3>
            <h5 className="lg:text-sm text-gray-500">
              I'm Sodiq Sheriff Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </h5>
            <Link
              href="https://fairtheme-app.vercel.app/"
              target="_blank"
              className="flex items-center gap-1 pt-5 text-gray-400 hover:text-2xl hover:text-blue-800"
            >
              Fx Restaurant <MdArrowOutward className="text-white text-lg " />
            </Link>
          </div>
          <div
            className="flex flex-col h-[25rem] bg-cover bg-center rounded-lg lg:max-w-[40rem]"
            style={{ backgroundImage: "url(/assets/burger.png)" }}
          ></div>

          <div
            className="flex flex-col h-[25rem] bg-cover bg-center  rounded-lg lg:max-w-[40rem]"
            style={{ backgroundImage: "url(/assets/fairtheme.png)" }}
          ></div>
          <div className="flex flex-col text-white">
            <h1 className="text-3xl lg:text-4xl font-black ">03</h1>
            <h3 className="text-2xl lg:text-4xl font-bold py-8">
              Fairmoney Web App
            </h3>
            <h5 className="lg:text-sm text-gray-500">
              I'm Sodiq Sheriff Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </h5>
            <Link
              href="https://fairtheme-app.vercel.app/"
              target="_blank"
              className="flex items-center gap-1 pt-5 text-gray-400 hover:text-2xl hover:text-green-500"
            >
              Fairmoney <MdArrowOutward className="text-white text-lg " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
