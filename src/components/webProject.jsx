/* eslint-disable react/no-unescaped-entities */
// Carousel.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// eslint-disable-next-line no-unused-vars
import React from "react";
// image
import webLink1 from "../assets/webLink1.png";
import webLink2 from "../assets/webLink2.png";
import webLink3 from "../assets/webLink3.png";
import webLink4 from "../assets/webLink4.png";
import webLink5 from "../assets/webLink5.png";
import asetImg from "../assets/asetAtom.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faUpRightFromSquare);

const webProject = () => {
  const itemsWeb = [
    {
      image: webLink1,
      name: "Fantravel",
      role: "Web Developer",
      subtitle: " Web Travel App",
      descrpition:
        "FanTravel is a Travel Statis Website, and and i have completed to the backend developer stage with php and laravel framework 6, for more info u can email me",
      skill: ["HTML5", "Jquery", "JavaScript", "Bootstrap5"].join(" "),
      github: "https://github.com/Fanddibay/FrontEnd-FanTravel",
      demo: "https://fantravel.netlify.app/",
    },
    {
      image: webLink2,
      name: "Warsoed",
      role: "Web Developer",
      subtitle: "SME E-Commerce",
      descrpition:
        "The making of this project was taken from the Science and Technology Development Student Creativity Program (PKM-PI) which aims to make it easier for consumers to order food and drinks at the closest scope in the campus environment.",
      skill: ["HTML5", "Jquery", "JavaScript", "TailwindCSS"].join(" "),
      github: "https://github.com/Fanddibay/Warsoed",
      demo: "https://main--warsoed.netlify.app/",
    },
    {
      image: webLink3,
      name: "Productly",
      role: "Web Developer",
      subtitle: "Company Landing Page",
      descrpition:
        "Productly Company Website is a website comapny that i built with bootstrap 5, and jquery",
      skill: ["HTML5", "Jquery", "JavaScript", "Bootstrap 5"].join(" "),
      github: "https://github.com/Fanddibay/Productly-Company",
      demo: "https://productly-company.netlify.app/",
    },
    {
      image: webLink4,
      name: "TAX-QU",
      role: "Game Web Developer",
      subtitle: "Game Web Dev",
      descrpition:
        "Tax-Qu is a Game Question for a tax education that i built with Vanilla Css 80%, bootstrap, Vanilla Js, jquery, and webpack",
      skill: [
        "HTML5",
        "Jquery",
        "JavaScript",
        "Bootstrap 5",
        "Webpack",
        "Vanilla CSS",
      ].join(" "),
      github: "https://github.com/Fanddibay/Quizz-APP",
      demo: "https://demo-quizz-app.netlify.app/",
    },
    {
      image: webLink5,
      name: "LuxSpace",
      role: "Front End Web Developer",
      subtitle: "E-Commerce Furniture",
      descrpition:
        "Luxspace is a website online shop funiture that i built with tailwind css, jquery, dan webpack",
      skill: [
        "HTML5",
        "Jquery",
        "JavaScript",
        "Bootstrap 5",
        "Webpack",
        "Vanilla CSS",
      ].join(" "),
      github: "https://github.com/Fanddibay/Luxspace-Tailwindcss",
      demo: "https://fanbayylux.netlify.app/",
    },
  ];
  // props adalah cara mengirim data antar komponen yang ada pada ReactJS
  function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#37809E",
          right: 0,
          width: 40,
          height: 40,
          textAlign: "center",
          alignSelf: "center",
          alignItems: "center",
          padding: 10,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#37809E",
          left: 0,
          width: 40,
          height: 40,
          textAlign: "center",
          alignSelf: "center",
          alignItems: "center",
          padding: 10,
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: 40,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="left-10 rotate-90 absolute"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="left-0  absolute"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="right-10 absolute"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="right-10 rotate-45 absolute"
      />

      <div
        className="container mt-32 mx-auto overflow-x-hidden lg:overflow-x-visible"
        id="project"
      >
        <h1 className="text-primary  font-bold text-center mb-12">
          Some Projects{" "}
          <span className="text-red-400">
            Web <br className="lg:hidden block" /> Development
          </span>{" "}
          I've built
        </h1>
        <Slider {...settings}>
          {itemsWeb.map((item, i) => (
            <div key={i} className="">
              <div className="lg:flex grid sm:grid gap-6 lg:justify-between bg-slate-200 border-2 border-black lg:p-12 p-6 rounded-xl ms-6 h-[75vh] lg:h-[100%]">
                <img
                  src={item.image}
                  alt="Project Image Web"
                  className="lg:max-w-[50%]"
                />
                <div className="self-center items-center ">
                  <h3 className="text-black font-bold lg:text-3xl text-lg">
                    {item.name} | {item.subtitle}
                  </h3>
                  <h5 className="text-black font-semibold lg:text-xl text-sm mt-2 mb-4">
                    Role : {item.role}
                  </h5>

                  <p className="text-black font-light leading-tight tracking-wide lg:text-sm text-xs lg:text-balance">
                    {item.descrpition}
                  </p>
                  <article className="text-red-400 text-sm lg:text-md my-4">
                    {item.skill}
                  </article>
                  <div className="flex gap-4 text-black">
                    <a
                      href={item.github}
                      className="hover:text-red-400 text-black"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="md" />
                    </a>
                    |
                    <a
                      href={item.demo}
                      className="hover:text-red-400 text-black"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} size="md" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {itemsWeb.map((itemsLink, i) => (
          <div key={i} className="lg:flex grid"></div>
        ))}
      </div>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="left-0 rotate-12 absolute"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="right-10 rotate-90 absolute"
      />
    </>
  );
};

export default webProject;
