// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../App.css";
import DarkModeToggle from "../atoms/darkmodeToggle";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import {
  faCheckSquare,
  faCoffee,
  faCamera,
  faMoon,
  faSun,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee, faCamera, faBars, faMoon, faSun, faTimes);
const navbar = () => {
  const menu = ["Home", "About", "Project", "Contact", "Resume"];
  const menus = [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Project", href: "project" },
    { title: "Contact", href: "contact" },
  ];
  menu.pop();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Dekstop */}
      <nav
        className="items-center p-3 flex-wrap container mx-auto   mt-4 lg:block hidden z-50"
        id="home"
      >
        <div className="fixed flex border-2 border-black justify-between items-center mx-auto container rounded-xl shadow-md p-4  bg-slate-50 z-50">
          <img src={Logo} alt="Logo" width={60} />
          <ul
            className="flex align-middle justify-between my-auto"
            id="myLinks"
          >
            {menus.map((menu) => (
              <li
                key={menu.title}
                className="px-6 py-2  font-base hover:text-red-400 text-black cursor-pointer"
              >
                <Link
                  activeClass="active" // Gunakan jika ingin menambahkan kelas ketika tautan aktif
                  to={menu.href}
                  spy={true}
                  smooth={true}
                  offset={-70} // Sesuaikan offset jika ada elemen yang menutupi bagian atas
                  duration={300}
                  scrolling=""
                  onSetActive={menu.href}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2 bg-red-400 text-white font-medium rounded hover:bg-red-900 transition duration-500">
              <a href="/public/CV-FANDI.pdf" target="_blank">
                Resume
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
      {/* mobile */}
      <nav className=" text-center self-center bg-slate-800  items-center w-full  p-4 flex-wrap justify-between lg:hidden fixed z-50 shadow-md ">
        <div className="flex justify-between">
          <img
            src={Logo}
            alt="Logo"
            height={20}
            width={50}
            className="h-full"
          />
          <div>
            <button className="-mt-12">
              <DarkModeToggle />
            </button>
            <FontAwesomeIcon
              icon={faBars}
              className={`menu-icon p-1 text-white mr-2 mt-2 ${
                isOpen ? "hidden" : ""
              }`}
              onClick={toggleMenu}
              size="xl"
            />
            {/* Ikon X (Close) */}
            <FontAwesomeIcon
              icon={faTimes}
              className={`close-icon p-1 text-white mr-2 mt-2 ${
                isOpen ? "" : "hidden"
              }`}
              onClick={toggleMenu}
              size="xl"
            />
          </div>
        </div>

        {isOpen && (
          <div className="menu">
            {/* Tambahkan item-menu atau link-menu di sini */}
            {menus.map((menu) => (
              <li
                key={menu.title}
                className="px-6 py-2 list-none  font-base hover:text-red-400 text-black cursor-pointer"
              >
                <Link
                  activeClass="active" // Gunakan jika ingin menambahkan kelas ketika tautan aktif
                  to={menu.href}
                  spy={true}
                  smooth={true}
                  offset={-70} // Sesuaikan offset jika ada elemen yang menutupi bagian atas
                  duration={300}
                  scrolling=""
                  onSetActive={menu.href}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <li className=" px-4 py-2 bg-red-400 text-white rounded hover:bg-red-900 transition duration-500 list-none">
              <a href="/public/CV-FANDI.pdf" target="_blank">
                Resume
              </a>
            </li>
          </div>
        )}
      </nav>
    </>
  );
};

export default navbar;
