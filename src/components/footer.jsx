import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faLinkedin, faInstagram, faTelegram);
const footer = () => {
  const logoFooter = [
    {
      logo: faFacebook,
      link: "https://www.facebook.com/fanbay.fanbay.1",
    },
    {
      logo: faLinkedin,
      link: "https://www.linkedin.com/in/fandibayu/",
    },
    {
      logo: faInstagram,
      link: "https://www.instagram.com/fanddibay/",
    },
    {
      logo: faTelegram,
      link: "https://t.me/Fanbayy",
    },
  ];
  return (
    <>
      <footer className="mt-32">
        <hr />
        <div className="container mx-auto my-6">
          <div className="sm:flex text-center justify-between">
            <h5>©2024. All Rights Reserved</h5>
            <h5>Developed by Fandi Bayu</h5>
            <div className="flex gap-4 justify-center mt-6 sm:mt-0 ">
              {logoFooter.map((items, i) => (
                <div key={i}>
                  <a
                    href={items.link}
                    target="_blank"
                    className="border-red-400 border-2 px-2 py-1 rounded-full text-red-400 hover:text-white hover:bg-red-400 hover:border-black hover:border-2"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={items.logo} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
