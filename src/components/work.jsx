/* eslint-disable react/no-unescaped-entities */
import fivverrLogo from "../assets/Fiverr_logo.svg";
import automecy from "../assets/automecy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import asetImg from "../assets/asetAtom.png";

import {
  faBootstrap,
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faNpm,
  faReact,
  faSketch,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faFileCode } from "@fortawesome/free-solid-svg-icons";

library.add(
  faFigma,
  faCode,
  faSketch,
  faFileCode,
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faNpm
);
const work = () => {
  const iconLanguage = [faHtml5, faCss3, faJs, faBootstrap, faReact, faNpm];
  const designIcon = [
    {
      icon: faFigma,
      title: "UI/UX Design",
      description:
        "Create User Interface design with unique & modern ideas, also has a good experience for the user and is easy for the user to understand and creating design systems, auto layout design and interactive prototyping",
    },
    {
      icon: faCode,
      title: "Web Development",
      description:
        "Expert in slicing from design to code using HTML, CSS, JavaScript, React JS, Tailwind CSS, and Bootstrap5, and has a lot of experience in doing web development",
    },
    {
      icon: faSketch,
      title: "Visual Design",
      description:
        "Creative in creating visual designs such as logos for products or companies that are modern and clean",
    },
    {
      icon: faFileCode,
      title: "Tools Development",
      description:
        "Tools that are often used in UI/UX Design and Web Development are (Figma, Visual Studio Code, Github, Miro, and supporting browsers)",
    },
  ];

  return (
    <>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute mt-22 rotate-90 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute top-0 "
      />
      <div id="about">
        <div className="lg:hidden sm:block">
          <div className="justify-center items-center text-center my-auto">
            <h1 className="font-bold text-center text-primary">
              My <span className="text-red-400">Experience</span>
            </h1>
            <marquee direction="right">
              <div className="flex gap-12 mt-8  items-center">
                {" "}
                <img
                  src="https://aikrut.id/files/companylogo/35/9e49fac4cb37d1dcb53584c002b0d6cb.png"
                  alt=""
                  height={24}
                  width={150}
                />
                <img
                  src="https://solusi247.com/wp-content/uploads/2021/02/logoweb247.png"
                  height={24}
                  width={250}
                  alt=""
                />
                <img src={fivverrLogo} height={24} width={200} alt="" />
                <img src={automecy} height={24} width={200} alt="" />
              </div>
            </marquee>
          </div>
          <div className="container mx-auto">
            <div className="mt-24 p-4">
              <div className="align-middle self-center">
                <h5 className="text-primary font-bold text-start  capitalize">
                  Why Hire Me For Your next
                  <span className="text-red-400 ms-3">Project?</span>
                </h5>
                <p className="tracking-wide text-md leading-relaxed font-normal mt-4 text-md mb-4">
                  I'm specialist in UI/UX Design, and Slicing Design to Code{" "}
                  <span className="text-red-400 font-bold">
                    HTML, CSS, JavaScript, React JS, Tailwind CSS, and Bootstrap
                    5
                  </span>
                  , My Passion is Designing, Solving Problem & Developing User
                  Interface
                </p>
                <div className="flex mb-10 gap-6">
                  {iconLanguage.map((items, i) => (
                    <div key={i}>
                      <FontAwesomeIcon icon={items} size="xl" />
                    </div>
                  ))}
                </div>
                <a href="#" className="btn-primary">
                  Contact Me
                </a>
              </div>
              <div className="mt-12 gap-y-12 grid sm:gap-4 sm:grid sm:grid-rows-2 sm:grid-flow-col">
                {designIcon.map((icon, i) => (
                  <div
                    key={i}
                    className="bg-slate-100 border-2 border-black p-12 text-black rounded-lg"
                  >
                    <FontAwesomeIcon icon={icon.icon} size="2xl" />
                    <h5 className="font-bold text-xl mt-4 mb-2 text-red-400">
                      {icon.title}
                    </h5>
                    <p className="font-light lg:text-balance">
                      {icon.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="mt-24 py-12 self-center items-center content-center   mx-auto">
            <div className="justify-center items-center text-center my-auto">
              <h1 className="font-bold text-center text-5xl">
                My <span className="text-red-400">Experience</span>
              </h1>
              <div className="mt-6 lg:flex block gap-24 justify-center items-center">
                <img
                  src="https://aikrut.id/files/companylogo/35/9e49fac4cb37d1dcb53584c002b0d6cb.png"
                  alt=""
                  height={24}
                  width={150}
                />
                <img
                  src="https://solusi247.com/wp-content/uploads/2021/02/logoweb247.png"
                  height={24}
                  width={250}
                  alt=""
                />
                <img src={fivverrLogo} height={24} width={200} alt="" />
                <img src={automecy} height={24} width={200} alt="" />
              </div>
            </div>
          </div>
          <div className="my-32 container mx-auto">
            <div className=" justify-between flex ">
              <div className="align-middle self-center mr-24">
                <h5 className="text-4xl font-bold text-start leading-snug capitalize">
                  Why Hire Me For Your next{" "}
                  <span className="text-red-400">Project?</span>
                </h5>
                <p className="tracking-wide leading-relaxed font-normal mt-4 text-base mb-4">
                  I'm specialist in UI/UX Design, and Slicing Design to Code{" "}
                  <span className="text-red-400 font-bold">
                    HTML, CSS, JavaScript, React JS, Tailwind CSS, and Bootstrap
                    5
                  </span>
                  , My Passion is Designing, Solving Problem & Developing User
                  Interface
                </p>
                <div className="flex mb-12 gap-6">
                  {iconLanguage.map((items, i) => (
                    <div key={i}>
                      <FontAwesomeIcon icon={items} size="xl" />
                    </div>
                  ))}
                </div>
                <a href="#" className="btn-primary">
                  Contact Me
                </a>
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-4 ">
                {designIcon.map((icon, i) => (
                  <div
                    key={i}
                    className="bg-slate-200  text-black rounded-lg p-6 border-black border-2"
                  >
                    <FontAwesomeIcon icon={icon.icon} size="2xl" />
                    <h5 className="font-bold text-xl mt-4 mb-2 text-red-400">
                      {icon.title}
                    </h5>
                    <p className="font-light">{icon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-5 mt-24 rotate-90"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute bottom-0  lg:block hidden"
      />
    </>
  );
};

export default work;
