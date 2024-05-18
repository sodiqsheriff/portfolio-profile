import { FacebookIcon } from "./app_icons";
import { Reddit } from "./app_icons";
import { Twitter } from "./app_icons";
import { Discord } from "./app_icons";
import { HeroImage } from "./svg_components";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-5 lg:px-16 pt-20 md:pt-7 w-full  items-center">
        <div className="flex flex-col text-2xl md:text-3xl lg:text-[2.5rem] md:pt-12 lg:w-1/2 ">
          <h1 className="leading-[1em] md:leading-[1.5em] font-normal">
            Hello I'm <b className="font-extrabold">Sodiq Sheriff</b>
            <b className="font-extrabold">{" "}Frontend</b>
            <b
              className="font-extrabold text-white =
            .32"
              style={{ WebkitTextStroke: "2px black" }}
            >
              {" "}
              Developer.
            </b>
          </h1>

          <h2 className="font-normal text-lg pt-7 leading-6">
            I'm Sodiq Sheriff Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to specimen book.
          </h2>

          <div className="flex flex-row gap-8 items-end pt-10 md:pt-20">
            <Link
              href="https://facebook.com"
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
              href="https://twitter.com"
              className="flex items-center justify-center border-2 border-black rounded h-14 w-14"
            >
              <Twitter />
            </Link>
            <Link
              href="https://discord.com"
              className="flex items-center justify-center border-2 border-black rounded h-14 w-14"
            >
              <Discord />
            </Link>
          </div>
        </div>
        <div className="m-0 p-0 -mt-20 md:-mt-0">
          <HeroImage />
        </div>
      </div>
    </>
  );
}
