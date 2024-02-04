import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/NavBarStyle.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trends from "./Trends";
import About from "./About";
export const Container = React.createContext();
function Navbar() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container.Provider value={{ inputValue }}>
      <div>
        <nav>
          <div className="nav-options">
            <h1>FLIX</h1>

            <NavLink to="">
              <span>Movies</span>
            </NavLink>
            {/* <NavLink to="/TvShows">
              <span>Tv Shows</span>
            </NavLink>
            <NavLink to="/Trends">
              <span>Trends</span>
            </NavLink> */}
            <NavLink to="/About">
              <span>About</span>
            </NavLink>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <CiSearch id="search" />
          </div>
        </nav>

        <Routes>
          <Route path="" element={<Movies />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="Trends" element={<Trends />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>
    </Container.Provider>
  );
}

export default Navbar;
