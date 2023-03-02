import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Writings from "./Writings";
import Main from "./Main";

const NavBar = () => {
  return (
    <div>
      <nav
        aria-label="Site Nav"
        className="flex items-center justify-between py-14"
      >
        <Link
          to="/"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
        >
          <span className="sr-only">Sajad</span>
          👋
        </Link>

        <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <li className="hidden lg:block">
            <Link className="rounded-lg px-3 py-2" to="/writings">
              Writings
            </Link>
          </li>

          <li>
            <Link className="rounded-lg px-3 py-2" to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default NavBar;
