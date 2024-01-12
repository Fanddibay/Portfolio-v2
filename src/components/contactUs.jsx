/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import asetImg from "../assets/asetAtom.png";

library.add(faWhatsapp, faMailBulk, faLocation);
const contactUs = () => {
  const menuItems = [
    {
      image: faWhatsapp,
      name: "Call Me",
      title: "+62-877-8152-2324",
    },
    {
      image: faMailBulk,
      name: "Email Me",
      title: "fandi.bayu110@gmail.com",
    },
    {
      image: faLocation,
      name: "Address",
      title: "Jakarta, Indonesia",
    },
  ];
  return (
    <>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-5 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute rotate-90 top-0 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute bottom-0 lg:block hidden"
      />
      <div className="container mt-32 mx-auto p-4 lg:p-0" id="contact">
        <div className="w-[100px] mx-auto">
          <h5 className="text-center items-center border-2 border-red-400 p-2 rounded-ss-xl  rounded-ee-xl font-bold text-red-400">
            Contact
          </h5>
        </div>
        <div className="text-center mt-6">
          <h3 className="font-bold text-primary">
            Let's Discuss Your <span className="text-red-400">Project</span>
          </h3>
          <p className="lg:text-balance text-sm lg:text-lg mt-4">
            Let's make something new, different and more meaningful or make{" "}
            <br className="lg:block hidden" />
            thing more visual or conceptual
          </p>
        </div>
        <div className="justify-center items-center mx-auto self-center  text-center my-12">
          <a
            href="mailto:fandi.bayu110@gmail.com"
            target="_blank"
            className="btn-primary"
            rel="noreferrer"
          >
            Let's Talk
          </a>
        </div>
        <div className="sm:w-full lg:mt-24 mt-12">
          <div className="sm:flex  lg:flex lg:justify-between md:grid grid sm:gap-4 gap-6 lg:gap-12 sm:w-full  mb-12 lg:mb-0 ">
            {menuItems.map((items, i) => (
              <div key={i}>
                <div className="flex gap-4 ">
                  <div className="bg-slate-400 rounded-xl items-center self-center p-4 text-white ">
                    <FontAwesomeIcon icon={items.image} size="xl" />
                  </div>
                  <div className="self-center">
                    <h5 className="text-grey-400 text-base lg:text-xl tracking-wide">
                      {items.name}
                    </h5>
                    <p className="font-semibold text-sm lg:text-lg ">
                      {items.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-5 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute rotate-90 "
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute right-[72%] lg:block hidden"
      />
      <img
        src={asetImg}
        width={25}
        height={25}
        alt=""
        className="absolute rotate-90 left-0 lg:block hidden"
      />
    </>
  );
};

export default contactUs;
