import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Automation from "./Services/Automation";

const Service = [
  { link: "automation", name: "Avtomatlashtirish" },
  { link: "iptelephony", name: "IP telefoniya" },
  { link: "siteservices", name: "Site xizmatlari" },
  { link: "mobileapps", name: "Mobile apps" },
  { link: "marketing", name: "Marketing" },
];

const Services = () => {
  return (
    <>
      <div>
        <ul>
          {Service.map((el, ind) => {
            return (
              <li key={ind}>
                <Link to={el.link}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Services;
