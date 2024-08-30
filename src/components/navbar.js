import React, { Component } from "react";
import "./navstyles.css";
import { Menus } from "./menus";
import { Link } from "react-router-dom";

class Navbar extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}

	render() {
		return (
			<nav className="Navbaritems">
				<h1 className="navlogo">Roam-Realm</h1>

				{/* Drawer */}
				<div className="drawer" onClick={this.handleClick}>
					<i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
				</div>

				{/* Menu */}
				<ul className={this.state.clicked ? "navmenu active" : "navmenu"}>
					{Menus.map((item, index) => (
						<li key={index}>
							<Link className={item.classname} to={item.url}>
								<i className={item.icon}></i>
								{item.title}
							</Link>
						</li>
					))}
					<button>Signup</button>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
