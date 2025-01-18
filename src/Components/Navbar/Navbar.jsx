import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="logo">
            <h1>
              <VscCompassDot size={30} style={{ marginRight: "0.5rem" }} />
              TravYo.
            </h1>
          </Link>
        </div>
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <ul className="navLists">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/packages" className="navLink">
                Packages
              </Link>
            </li>
            <li className="navItem">
              <Link to="/shop" className="navLink">
                Shop
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link to="/pages" className="navLink">
                Pages
              </Link>
            </li>
            <li className="navItem">
              <Link to="/news" className="navLink">
                News
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
            <li className="navItem">
              <Link to="/booking" className="navLink button">
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
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