import React from "react";
import connectdevs from "../images/connectdevs.png";
import { useState } from "react";
import backward from "../images/backward.svg";

const Projects = () => {
  const [currrentIndex, setCurrentIndex] = useState(0);
  const projectList = [
    {
      title: "Connect Devs",
      image: connectdevs,
      description:
        "Your go-to platform for developers worldwide to find partners, collaborate on projects, and join hackathons. Expand your network, unleash creativity, and be part of a thriving tech community.",
      url: "https://connect-devs.netlify.app/",
    },
    {
      title: "Bibliophile",
      description:
        "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
      url: "",
    },
    {
      title: "Neurons",
      description:
        "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
      url: "",
    },
    {
      title: "Nomad Nest",
      description:
        "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
      url: "",
    },
  ];

  // updating the index

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= projectList.length) {
      newIndex = projectList.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <section className="h-screen w-full bg-black overflow-y-hidden">
      <div className="flex justify-center items-center pt-8  flex-col">
        <p className="text-[#A6A9AA]">
          {" "}
          <span className="text-sm">&lt;h2&gt;</span>
          <div className="text-white font-Kode text-7xl mx-4">MY Portfolio</div>
          <span className="relative left-[30rem] text-sm">&lt;/h2&gt;</span>
        </p>
        <div className="flex mt-16 text-[#A6A9AA] gap-x-6">
          <div className="">
            <span className="absolute text-sm left-[42rem]">&lt;p&gt;</span>

            {/* carousel items */}

            <div className=" flex-nowrap overflow-x-hidden inline-flex justify-center items-center">
              {projectList.map((project) => (
                <div className="flex bg-white " key={project.title}>
                  <div className="">
                    <img
                      src={project.image}
                      alt=""
                      className="w-72 h-72 border rounded-full border-[#A6A9AA]"
                    />
                  </div>

                  <div className="">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="font-Kode text-5xl mt-4 text-[#02F74C]">{project.title}</h3>
                    </a>
                    <p className="w-96 font-code font-semibold mt-1">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* curousel buttons */}
            <div>
              <button className="w-14 h-14 flex justify-center items-center rounded-full bg-greenPrimary border-spacing-1 border-greenPrimary">
                <img src={backward} alt="" />
              </button>
              <button className="">
                <img src="" alt="" />
              </button>
            </div>
            <span className="mt-4 text-sm absolute left-[42rem]">&lt;/p&gt;</span>
          </div>
        </div>
        <hr className="border-[#1D5D33] w-72 mt-10 border-2" />
      </div>
    </section>
  );
};

export default Projects;
