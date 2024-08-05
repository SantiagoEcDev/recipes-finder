import { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen)
  };
  
  return (
    <>
      <div className="header-navbar">
        <a className="header-navbar-menu-button" onClick={toggleMenu}>
          {isOpen ? <IoClose/> : <IoMenu/>}
        </a>
        <h1 className="header-title">
          Recipe<span className="title-span"> Finder</span>
        </h1>
      </div>
      
    </>
  );
};
