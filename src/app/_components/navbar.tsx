'use client';
import React, { useState } from "react";
import { ProfileLogoText } from "./svg_components";
import Link from "next/link";
import { DownloadIcon } from "./app_icons";
import { RiCloseLine } from "react-icons/ri";
import {HiMenuAlt3} from "react-icons/hi"
export function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =()=> {
        setIsOpen(!isOpen);
    };

    const closeMenu =()=>{
        setIsOpen(false);
    };
    return(
        <>
         <div className="flex items-center justify-between px-5 lg:px-12 w-full pt-3 pb-2 fixed bg-white">
            <ProfileLogoText />
            <div className="hidden lg:flex items-center space-x-8 capitalize font-semibold">
                <Link href={'#'} className="hover:underline">about me</Link>
                <Link href={'#'} className="hover:underline">skills</Link>
                <Link href={'#'} className="hover:underline">project</Link>
                <Link href={'#'} className="hover:underline">contact me</Link>
            </div>
            <button type="submit" className="hidden lg:flex items-center gap-2 text-white bg-black font-semibold px-4 py-2 rounded">Resume <DownloadIcon/></button>
         <button onClick={toggleMenu} className="lg:hidden">
            {isOpen ?(
                <RiCloseLine className="h-8 w-8" />
            ):
            (
                  <HiMenuAlt3 className="h-8 w-8" />
            )
            }
         </button>

         <div onClick={closeMenu}
         className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-75 transition-transform duration-300 ease-in-out z-40`}>
                  <nav className="flex flex-col items-center text-2xl justify-center text-left pt-20 space-y-12 font-bold md:text-4xl capitalize text-white">
                  <Link href={'#'} className="hover:underline">about me</Link>
                <Link href={'#'} className="hover:underline">skills</Link>
                <Link href={'#'} className="hover:underline">project</Link>
                <Link href={'#'} className="hover:underline">contact me</Link>
                <button type="submit" className="flex items-center gap-2 text-white bg-black font-semibold px-4 py-2 rounded">Resume <DownloadIcon/></button>
      </nav>        

         </div>
         </div>
        </>
    )
}