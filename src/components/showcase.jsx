// eslint-disable-next-line no-unused-vars
import React from "react";
import Carousel from "../atoms/carouselImg";

const showcase = () => {
  return (
    <>
      <div
        className="container mx-auto mt-24 overflow-hidden lg:overflow-x-visible "
        id="project"
      >
        <div className="lg:flex block items-center">
          <div
            className="lg:w-1/3 mb-12 lg:p-6 p-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h5 className="text-red-400 border-2 text-center sm:w-1/5 w-1/4 border-red-400  px-2.5 py-2 rounded-ss-xl rounded-se-xl rounded-ee-xl">
              Portfolio
            </h5>
            <div className="w-100">
              <h1 className="text-4xl  my-6 leading-tight tracking-4 font-bold">
                My Creative Works Latest
                <span className="text-red-400 font-bold ms-3">Project</span>
              </h1>
              <p className="text-base leading-8 font-normal mb-12 tracking-snug">
                I have selected and mentioned here some of my latest{" "}
                <br className="lg:block hidden" /> projects to shre with you.
              </p>
              <a
                href="https://dribbble.com/fanbayy"
                target="_blank"
                className="btn-primary"
                rel="noreferrer"
              >
                Show More
              </a>
            </div>
          </div>
          <div
            className="lg:w-3/5 w-full lg:p-6"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {" "}
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default showcase;
