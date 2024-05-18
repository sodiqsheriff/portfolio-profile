import { BsBootstrapFill } from "react-icons/bs"
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiJavascript, SiNextui, SiTypescript } from "react-icons/si"

export function Skill(){
    return(
        <>
         <div className="mt-0 lg:mt-10 px-5 lg:px-16">
            <h1 className="text-center text-2xl lg:text-4xl">My <b className="font-black">Skills</b></h1>
            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                <div className="h-[11rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <FaHtml5 className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Html</h1>
                </div>
                <div className="h-[11rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <FaCss3Alt className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Css</h1>
                </div>
                <div className="h-[11rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <BsBootstrapFill className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Bootstrap</h1>
                </div>
                <div className="h-[11rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <SiNextui className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Next ui</h1>
                </div>
                <div className="h-[11rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <RiTailwindCssFill className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Tailwind</h1>
                </div>
                <div className="h-[10rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <SiJavascript className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Javascript</h1>
                </div>
                <div className="h-[10rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <SiTypescript className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Typescript</h1>
                </div>
                <div className="h-[10rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <FaReact className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">React</h1>
                </div>
                <div className="h-[10rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <RiNextjsFill className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Next js</h1>
                </div>
                <div className="h-[10rem] lg:w-[11rem] flex flex-col items-center justify-center border border-black rounded">
                   <FaGithub className="h-[3rem] w-[3rem]"/>
                   <h1 className="text-xl font-bold text-center pt-4">Github</h1>
                </div>
            </div>
         </div>
        </>
    )
}