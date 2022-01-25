import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#ff6600", padding: "3px 0px" }}>
        <div style={{ marginRight: "5px", marginLeft: "5px" }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
          >
            Hacker News{" "}
          </Link>{" "}
          |
        </div>
        <div style={{ marginRight: "5px" }}>
          <Link to="/newest" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            new{" "}
          </Link>{" "}
          |
        </div>
        <div style={{ marginRight: "5px" }}>
          <Link to="/best" style={{ textDecoration: "none", color: "black" }}>
            best
          </Link>{" "}
          |
        </div>
        <div style={{ marginRight: "5px" }}>
          <Link to="/ask" style={{ textDecoration: "none", color: "black" }}>
            ask
          </Link>{" "}
          |
        </div>
        <div style={{ marginRight: "5px" }}>
          <Link to="/show" style={{ textDecoration: "none", color: "black" }}>
            show
          </Link>{" "}
          |
        </div>
        <div style={{ marginRight: "5px" }}>
          <Link to="/jobs" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            jobs
          </Link>{" "}
          |
        </div>
        <div>
          <Link to="/submit" style={{ textDecoration: "none", color: "black"  }}>
            {" "}
            submit
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
