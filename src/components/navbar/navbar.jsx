import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "../../app/navigationSlice/navigationConfig";
import hasPermission from "../../utils/authrizationUtils";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navList, setNavList] = useState([]);
  const { role } = useSelector((state) => state.auth);
  useLayoutEffect(() => {
    const filterNavigationConfig = () => {
      const nav = navigationConfig.filter((elm, index) => {
        // return elm.auth?.includes(role);
        if (elm?.auth?.length === 0) {
          return true;
        }
        if (elm.auth?.includes(role)) {
          return true;
        }
      });
      setNavList(nav);
    };
    filterNavigationConfig();
  }, [navigationConfig]);
  return (
    <div className="navbar-container">
      <div className="company-logo">Logo</div>
      <div className="nav-list">
        <ul>
          {navList.map((navItem) => {
            return (
              <li key={navItem.url}>
                <Link to={navItem.url}>{navItem.title}</Link>
              </li>
            );
          })}
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
