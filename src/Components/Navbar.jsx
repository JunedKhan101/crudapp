import React from "react";
import "../CSS/Navbar.css";

export default function Navbar() {
	return(
		<div className="MyNavbar">
			<nav className="navbar navbar-expand-lg navbar-light">
			  <a className="navbar-brand" href="#">Task</a>

			  <div className="home" id="navbarSupportedContent">
			    <text>Home</text>
			  </div>
			</nav>
		</div>
	);
}