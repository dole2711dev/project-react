import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import components
import InputSearch from "./InputSearch";
import Home from "./pages/Home";
import Community from "./pages/Home";
import Blog from "./pages/Blog";

const Nav = () => {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="br-test">
					<i className="navbar-icon pr-10px fab fa-asymmetrik"></i>
					<span className="navbar-title pr-30px">Asymmetrik</span>
				</div>
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
						</Switch>
					</Router>
				</div>
				<InputSearch />
				<div className="navbar-login">
					<Router>
						<Link to="/login" className="btn-login pr-30px">
							Login<i class="pl-10px fas fa-sign-in-alt"></i>
						</Link>
						<Link to="/signin" className="btn-signin">
							Sign In<i class="pl-10px fas fa-sign-in-alt"></i>
						</Link>
					</Router>
				</div>
			</div>
		</div>
	);
};

export default Nav;
