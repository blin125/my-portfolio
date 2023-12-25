import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ scrollToSection, activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
           setMenuOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav ref={navbarRef}>
            <Link to="/" className="title"> My Portfolio</Link>
            <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <a
                        href="#about-section"
                        className={activeSection === "about-section" ? "act" : ""}
                        onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about-section");
                        }}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#projects-section"
                        className={activeSection === "projects-section" ? "act" : ""}
                        onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("projects-section");
                        }}
                    >
                    Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact-section"
                        className={activeSection === "contact-section" ? "act" : ""}
                        onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact-section");
                        }}
                    >
                        Contact
                    </a>
                </li>         
            </ul>
        </nav>
    );
};

export default Navbar;
