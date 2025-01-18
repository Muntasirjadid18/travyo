import { useState } from "react";
import { VscCompassDot } from "react-icons/vsc";
import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="navBarSection">
      <header className="header">
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1>
              <VscCompassDot size={30} style={{ marginRight: "0.5rem" }} />
              TravYo.
            </h1>
          </a>
        </div>
        <div className={`navbar ${isOpen ? "active" : ""}`}>
          <ul className="navLists">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
               Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink button">
                Book Now
              </a>
            </li>
          </ul>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? 
            <AiFillCloseCircle style={{ color: "#2ecc71" }} /> : 
            <TbGridDots style={{ color: "#2ecc71" }} />
          }
        </button>
      </header>
    </section>
  );
};

export default Navbar;