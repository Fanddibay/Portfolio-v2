// Carousel.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import PMobile1 from "../assets/PMobile1.png";
import PMobile2 from "../assets/PMobile2.png";
import PMobile3 from "../assets/PMobile3.png";
import WebImg1 from "../assets/PWeb1.png";
import WebImg2 from "../assets/PWeb2.png";
import WebImg3 from "../assets/PWeb3.png";
import WebImg4 from "../assets/PWeb4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faUpRightFromSquare);

const Carousel = () => {
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
    slidesToShow: 2,
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

  const projectInfo = [
    {
      image: WebImg1,
      name: "Influencer Hub Landing Page",
      info: "UI/UX Design",
      category: "Web Design",
      link: "https://dribbble.com/shots/21049919-Brands-Influencers-Web-Design",
    },
    {
      image: WebImg2,
      name: "Automation AI Landing Page",
      info: "UI/UX Design",
      category: "Web Design",
      link: "https://dribbble.com/shots/20604945-Furniture-Landing-Page-Design",
    },
    {
      image: WebImg3,
      name: "Furniture Landing Page",
      info: "UI/UX Design",
      category: "Web Design",
      link: "https://dribbble.com/shots/20604945-Furniture-Landing-Page-Design",
    },
    {
      image: WebImg4,
      name: "Dashboard Web App",
      info: "UI/UX Design",
      category: "Web Design",
      link: "https://dribbble.com/shots/23326311-Dashboard-Monitoring",
    },
    {
      image: PMobile1,
      name: "Redesign MyPertamina App",
      info: "UI/UX Case Study",
      category: "Mobile App",
      link: "https://www.behance.net/gallery/162314113/Redesign-MyPertamina-UIUX-Case-Study",
    },
    {
      image: PMobile2,
      name: "Fintech Mobile App",
      info: "UI/UX Case Study",
      category: "Mobile App",
      link: "https://www.behance.net/gallery/163173421/Mony-App-Wallet-Management-App-UIUX-Case-Study",
    },
    {
      image: PMobile3,
      name: "Ojek Campoes App",
      info: "UI/UX Case Study",
      category: "Mobile App",
      link: "https://www.behance.net/gallery/162314113/Redesign-MyPertamina-UIUX-Case-Study",
    },
  ];
  return (
    <Slider {...settings}>
      {projectInfo.map((items, i) => (
        <div key={i} className=" ">
          <div className="bg-slate-200 p-4 lg:p-8 rounded-xl border-2  border-black ms-5">
            <img src={items.image} alt="Project Fandi" />
            <h3 className="font-bold my-6 text-md sm:text-sm lg:text-xl text-black">
              {items.name}
            </h3>
            <div className="flex justify-between items-center self-center">
              <div className="sm:flex gap-4 grid">
                <h5 className="py-1 px-2 border-2 font-bold border-black text-xs lg:text-sm rounded-lg text-black">
                  {items.info}
                </h5>
                <h5 className="py-1 px-2 border-2 font-bold border-black rounded-lg text-xs lg:text-sm text-black">
                  {items.category}
                </h5>
              </div>
              <div>
                <a
                  href={items.link}
                  className="text-red-400 border-2 rounded-full px-3 py-2 border-red-400 hover:text-white hover:bg-red-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
