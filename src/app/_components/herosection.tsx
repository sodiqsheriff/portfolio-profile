import { FacebookIcon } from "./app_icons";
import { HeroImage } from "./svg_components";

export function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row px-5 lg:px-16 pt-20 md:pt-7 w-full  items-center">
        <div className="flex flex-col text-2xl md:text-[2.5rem] w-full ">
          <h1 className="leading-[1em] md:leading-[1.5em] font-normal">
            Hello I'm <b className="font-extrabold">Sodiq Sheriff.</b>
          </h1>
          <h1>
            <b className="font-extrabold">Frontend</b>
            <b className="font-extrabold text-white inset-0 relative-z-1"> Developer.</b>
          </h1>

          <h2 className="font-normal text-lg pt-7 leading-6">
            I'm Sodiq Sheriff Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </h2>

          <div className="flex flex-row gap-8 items-end pt-14">
            <div className="flex items-center justify-center bg-black border border-black rounded-sm h-16 w-16">
                <FacebookIcon />
            </div>
          </div>
        </div>
        <div className="">
          <HeroImage />
        </div>
      </div>
    </>
  );
}
