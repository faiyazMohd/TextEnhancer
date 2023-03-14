import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const location = useLocation();
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode.themeMode} bg-${props.mode.themeMode} `}
      >
        <div className={`container-fluid text-success`}>
          <Link className={`navbar-brand text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}`} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"fw-bold":""} text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"fw-bold":""} text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}`} to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className="radioColors">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-dark"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="dark"
                  defaultChecked
                  onChange={props.handleColorChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  <small>black</small>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-success"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="success"
                  onChange={props.handleColorChange}
                />
                <label
                  className="form-check-label text-success"
                  htmlFor="inlineRadio2"
                >
                  <small>green</small>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-primary"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="primary"
                  onChange={props.handleColorChange}
                />
                <label
                  className="form-check-label text-primary"
                  htmlFor="inlineRadio3"
                >
                  <small>blue</small>
                </label>
              </div>
            </div>

            {/* switch */}
            <div className="form-check form-switch">
              <input
                className={`form-check-input bg-${props.mode.themeMode==="light"?"white":props.mode.themeColor==="dark"?"secondary":props.mode.themeColor}`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggelMode}
              />
              <label
                className={`form-check-label text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode.themeMode === "light"
                  ? "Enable Dark Mode"
                  : "Disable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title here",
  aboutText: "About",
};
