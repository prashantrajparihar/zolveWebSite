import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center p-4 px-md-4 mb-4 bg-white border-bottom shadow-sm">
          <h3 className="my-0 mr-md-auto font-weight-bold">Zolve</h3>
          <nav className="my-2 my-md-2 mr-md-3">
            <NavLink
              className="p-2 "
              to="/home"
              activeStyle={{ color: "red" }}
              activeClassName="selected"
              exact
            >
              Home
            </NavLink>{" "}
            -
            <NavLink
              className="p-2 "
              to="/thirdPartyApi"
              activeStyle={{ color: "red" }}
              activeClassName="selected"
              exact
            >
              ThirdPartyApi
            </NavLink>{" "}
            -
            <NavLink
              className="p-2 "
              to="/copyToClipboard"
              activeStyle={{ color: "red" }}
              activeClassName="selected"
              exact
            >
              copyToClipboard
            </NavLink>{" "}
            -
            <NavLink
              className="p-2 "
              to="/selfie"
              activeStyle={{ color: "red" }}
              activeClassName="selected"
              exact
            >
              {" "}
              selfie{" "}
            </NavLink>
          </nav>
        </div>

        <hr />
      </header>
    </>
  );
};

export default Header;
