import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavItems = [
  { icon: "", name: "Asosiy", link: "/" },
  { icon: "", name: "Biz haqimizda", link: "/about" },
  { icon: "", name: "Mijozlar", link: "/customers" },
  { icon: "", name: "Jamoa", link: "/group" },
  { icon: "", name: "Xizmatlar", link: "/services" },
  { icon: "", name: "Aloqa", link: "/contact" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div>LOGO</div>
      <ul>
        {NavItems.map((el, ind) => {
          return (
            <li key={ind}>
              <Link
                to={el.link}
                style={{ color: "white", textDecoration: "none" }}
              >
                <span>
                  icon
                  <p>{el.name}</p>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
