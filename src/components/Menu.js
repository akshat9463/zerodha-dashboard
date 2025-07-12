import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const collapseRef = useRef();

  // Handle click to close mobile navbar
  const handleMenuClick = () => {
    const collapseEl = collapseRef.current;
    if (collapseEl && collapseEl.classList.contains("show")) {
      new window.bootstrap.Collapse(collapseEl).hide(); // Bootstrap 5 API
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top border-bottom"
      style={{ backgroundColor: "#fff", width: "100%" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img src="logo.png" alt="logo" style={{ width: "30px" }} />

        {/* Hamburger button for mobile */}
        <button
          className="navbar-toggler flex-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          ref={collapseRef}
          style={{
            maxHeight: "40vh",
            overflowY: "auto",
            paddingTop: "1rem",
            zIndex: 1000,
          }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleMenuClick}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders" onClick={handleMenuClick}>
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/positions"
                onClick={handleMenuClick}
              >
                Positions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/holdings"
                onClick={handleMenuClick}
              >
                Holdings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/funds" onClick={handleMenuClick}>
                Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apps" onClick={handleMenuClick}>
                Apps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout" onClick={handleMenuClick}>
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Profile avatar (always visible) */}
        {/* <div className="d-flex align-items-center ms-3">
          <div
            className="text-white bg-primary d-flex justify-content-center align-items-center"
            style={{ width: "36px", height: "36px", borderRadius: "50%" }}
          >
            User
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Menu;
