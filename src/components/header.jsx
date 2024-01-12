import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../assets/Hero.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import asetImg from "../assets/asetAtom.png";

import {
  faGithub,
  faDribbble,
  faFacebook,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faDribbble, faFacebook, faLinkedin, faBehance);
import "../App.css";
import "../Header.css";

const header = () => {
  const iconPortfolio = [
    {
      image: faGithub,
      link: "https://github.com/Fanddibay",
    },
    {
      image: faBehance,
      link: "https://www.behance.net/fanddibayy",
    },
    {
      image: faDribbble,
      link: "https://dribbble.com/fanbayy",
    },
    {
      image: faLinkedin,
      link: "https://www.linkedin.com/in/fandibayu/",
    },
    {
      image: faFacebook,
      link: "https://www.facebook.com/fanbay.fanbay.1",
    },
  ];
  return (
    <>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute top-10 right-5 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute bottom-0 lg:block hidden"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-10 bottom-0 rotate-45 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-20 bottom-10 rotate-45 lg:block hidden"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-20 bottom-10 lg:block hidden"
      />
      <div className="p-4">
        <div className="lg:container mx-auto">
          <div className="sm:hidden block">
            <div className=" align-middle text-end  mt-5">
              <img src={heroImg} alt="Hero" width={1000} />
              <div className=" w-full align-middle self-center  pl-0 text-start">
                <h1 className="font-bold text-black-primary lg:mt-0 mt-6 leading-10 ">
                  <span className="font-medium text-3xl ">👋Hi am</span>
                  <br />
                  <span className="font-bold text-5xl lg:text-6xl">
                    Fandi Bayu
                  </span>
                  <br />
                  <span className="font-medium text-2xl lg:text-2xl">
                    <span className="text-blue-400">UI/UX DESIGNERS</span> | WEB
                    DEVELOPER
                  </span>
                </h1>
                <div className="mt-0 mb-24 ">
                  <h3 className=" text-base text-balance  leading-relaxed mb-8 mt-3 lg:my-8">
                    Designing and developing user
                    <span className="font-bold text-red-400  tracking-wide ms-1 leading-6">
                      Interface for over 2 years as UI/UX Designer and Web
                      Developer,
                    </span>
                    lets create something <br /> reate together.
                  </h3>
                  <a
                    href="mailto:fandi.bayu110@gmail.com"
                    target="_blank"
                    className="bg-red-400 border-2 border-black hover:bg-red-400 text-white hover:text-white px-9 py-2 text-white-text rounded-xl duration-500 "
                    rel="noreferrer"
                  >
                    Get in touch
                  </a>
                  <div className="flex gap-3  mt-6 ">
                    {iconPortfolio.map((setIcon, index) => (
                      <div key={index}>
                        <a href={setIcon.link} className="hover:text-red-400">
                          {" "}
                          <FontAwesomeIcon icon={setIcon.image} size="xl" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-48 sm:mt-10 sm:block hidden sm:px-6">
            <div className="flex sm:justify-between">
              <div className=" w-full align-middle self-center lg:pl-4 pl-0">
                <h1 className="font-bold text-black-primary lg:mt-0 leading-10 ">
                  <span className="font-medium text-2xl lg:text-4xl">
                    👋Hi am
                  </span>
                  <br />
                  <span className="font-bold text-5xl lg:text-6xl">
                    Fandi Bayu
                  </span>
                  <br />
                  <span className="font-medium text-2xl lg:text-2xl">
                    <span className="text-blue-400">UI/UX DESIGNERS</span> | WEB
                    DEVELOPER
                  </span>
                </h1>
                <div className="lg:mt-4 mt-0">
                  <h3 className="font-normal  leading-relaxed my-6 lg:my-8">
                    Designing and developing user
                    <span className="font-bold text-red-400 ms-1 leading-6">
                      Interface for over 2 years as UI/UX DESIGNERS{" "}
                      <br className="hidden lg:block" /> and WEB DEVELOPER, lets
                      create something reate together.
                    </span>{" "}
                    <br />
                    lets create something reate together.
                  </h3>
                  <a
                    href="mailto:fandi.bayu110@gmail.com"
                    target="_blank"
                    className="bg-red-400 bg- border-2 border-black hover:bg-red-900 text-white hover:text-white px-9 py-2 text-white-text rounded-xl duration-500 mb-4"
                    rel="noreferrer"
                  >
                    Get in touch
                  </a>

                  <div className="flex gap-4 mt-6 ">
                    {iconPortfolio.map((setIcon, index) => (
                      <div key={index}>
                        <a
                          href={setIcon.link}
                          target="_blank"
                          className="hover:text-red-400"
                          rel="noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon icon={setIcon.image} size="xl" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" align-middle text-end hidden sm:block">
                <img
                  src={heroImg}
                  alt="Hero"
                  width={1000}
                  className="lg:-mt-32 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
