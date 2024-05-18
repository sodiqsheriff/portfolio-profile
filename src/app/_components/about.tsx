import { Boy } from "./svg_components";

export function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:pt-16 w-full gap-4 px-5 lg:px-12">
        <div className="lg:w-1/2 md:pt-7 md:w-full md:mx-auto">
          <Boy />
        </div>
        <div className="flex flex-col lg:max-w-[38rem] pt-5 max-h-[35rem] space-y-3">
          <h1 className="text-3xl lg:text-5xl font-normal">
            About <b className="font-black">Me</b>
          </h1>
          <h3 className="md:text-lg font-normal pt-0 lg:pt-8 text-gray-500 leading-6">
            I'm a passionate, self-proclaimed designer who specializes in Frontend
            development (React.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performance code matters to me.
          </h3>
          <h3 className=" md:text-lg font-normal text-gray-500 leading-6">
            I began my journey as a web developer in 2020, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            3 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Tailwindcss and much more.
          </h3>
          <h3 className=" md:text-lg font-normal text-gray-500 leading-6">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </h3>
        </div>
      </div>
    </>
  );
}
