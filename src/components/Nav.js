import React, { useState, useEffect } from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import components
import InputSearch from "./InputSearch";
import Home from "./pages/Home";
import Community from "./pages/Home";
import Blog from "./pages/Blog";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Nav = () => {
	useEffect(() => {
		function CheckScroll() {
			window.addEventListener("scroll", ScrollNavBar);
		}
		CheckScroll();
		return () => {
			window.removeEventListener("scroll", ScrollNavBar);
		};
	});

	const STYLE_MENU_NAVBAR = useState(["navbar-menu", "navbar-menu-active"]);
	const STYLE_SHRINK = ["shrink-top", "shrink"];

	const [activeNavbar, setActiveNavbar] = useState(STYLE_MENU_NAVBAR[0]);
	const [shrink, setShrink] = useState(STYLE_SHRINK[0]);

	const ScrollNavBar = () => {
		if (window.pageYOffset > 0) {
			setShrink(STYLE_SHRINK[0]);
		} else {
			setShrink(STYLE_SHRINK[1]);
		}
	};
	const handlerNavbarMenu = (e) => {
		setActiveNavbar(
			activeNavbar === STYLE_MENU_NAVBAR[0]
				? STYLE_MENU_NAVBAR[1]
				: STYLE_MENU_NAVBAR[0]
		);
	};
	const handlerActiveNavbar = (e) => {};

	return (
		<div className={`navbar pl-30px ${shrink}`}>
			<div className="navbar-left">
				<div className="br-test">
					<i className="navbar-icon pr-10px fab fa-asymmetrik"></i>
					<span className="navbar-title pr-30px">Asymmetrik</span>
				</div>
			</div>
			<div className="navbar-right">
				<div className={`${activeNavbar}`}>
					<Router>
						<Link
							to="/home"
							className="expand-to-left home pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							Home
						</Link>
						<Link
							to="/community"
							className="expand-to-left community pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							Community
						</Link>
						<Link
							to="/blog"
							className="expand-to-left blog pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							Blog
						</Link>
						<Link
							to="/solutions"
							className="expand-to-left solutions pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							Solutions
						</Link>
						<Link
							to="/services"
							className="expand-to-left services pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							Services
						</Link>
						<Link
							to="/about"
							className="expand-to-left about pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							About
						</Link>
						<Link
							to="/contact"
							className="expand-to-left contact pl-20px pr-20px"
							onClick={handlerActiveNavbar}>
							Contact
						</Link>
						<Switch>
							<Route path="/home">
								<Home />
							</Route>
							<Route path="community">
								<Community />
							</Route>
							<Route path="blog">
								<Blog />
							</Route>
							<Route path="/solutions">
								<Solutions />
							</Route>
							<Route path="/services">
								<Services />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
						</Switch>
					</Router>
				</div>
				<span
					className="navbar-icon-menu fas fa-bars"
					onClick={handlerNavbarMenu}></span>
			</div>
		</div>
	);
};

export default Nav;
