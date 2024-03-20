import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import bits from "../../assets/bitsufc.jpg";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Change to false initially

  const navRef = useRef();

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isNavOpen]);

  const showNavBar = () => {
    setIsNavOpen(true);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="header">
      <div className="image-box-container">
        <img className="image-cont" alt="bits_logo" src={bits}></img>
      </div>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <a onClick={closeNavBar} href="/#Game">What is Ultimate ?</a>
        <a onClick={closeNavBar} href="/#Chants">Chants</a>
        <a onClick={closeNavBar} href="/#About">About Us</a>
        <a onClick={closeNavBar} href="/#gallery">Gallery</a>
        <a onClick={closeNavBar} href="/#meet-the-team">
          Roster
        </a>
        <button className="nav-btn nav-close-btn" onClick={closeNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Header;
