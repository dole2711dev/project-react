import React, { useEffect } from "react";
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
	return (
		<div className="navbar pl-30px">
			<div className="navbar-left">
				<div className="br-test">
					<i className="navbar-icon pr-10px fab fa-asymmetrik"></i>
					<span className="navbar-title pr-30px">Asymmetrik</span>
				</div>
			</div>
			<div className="navbar-right">
				<div className="navbar-menu">
					<Router>
						<Link to="/home" className="home pl-30px pr-30px">
							Home
						</Link>
						<Link
							to="/community"
							className="community pl-30px pr-30px">
							Community
						</Link>
						<Link to="/blog" className="blog pl-30px pr-30px">
							Blog
						</Link>
						<Link
							to="/solutions"
							className="solutions pl-30px pr-30px">
							Solutions
						</Link>
						<Link
							to="/services"
							className="services pl-30px pr-30px">
							Services
						</Link>
						<Link to="/about" className="about pl-30px pr-30px">
							About
						</Link>
						<Link to="/contact" className="contact pl-30px pr-30px">
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
			</div>
		</div>
	);
};

export default Nav;
