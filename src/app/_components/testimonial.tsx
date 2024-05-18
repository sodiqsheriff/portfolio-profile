import React from "react";

export function Testimonial() {
  const data = [
    {
      id: "1",
      image: "/assets/product designer.jpg",
      desc: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      name: "Kehinde Aluko",
      title: "Product Designer",
    },
    {
      id: "2",
      image: "/assets/mobile app dev.jpg",
      desc: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      name: "Tejumola Olamide",
      title: "Mobile App Developer",
    },
    {
      id: "3",
      image: "/assets/backend dev.jpg",
      desc: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      name: "Adebiyi Samod",
      title: "Backend Developer",
    },
  ];
  return (
    <>
    <header className="text-3xl lg:text-4xl text-center font-normal pb-7 pt-10 lg:pb-20">My <b className="font-black">Projects</b></header>
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between pb-20 px-4 lg:px-12">
        {data.map((item, index) => (
          <div className="flex flex-col space-y-6 h-96 justify-between rounded-lg md:w-full mx-auto lg:max-w-[23rem] p-7 bg-white hover:text-white  shadow-lg hover:shadow-2xl hover:bg-black items-center">
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className="object-cover w-16 h-16 rounded-full"
            />
            <h2 className="text-lg text-center">{item.desc}</h2>
            <h3 className="text-gray-700 text-center font-bold border-t-2 border-black pt-5">{item.name}</h3>
            <h4 className="text-sm text-center">{item.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
