import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Nav />
		</>
	);

	useEffect(() => {
		storeScroll();
	}, [""]);

	const debounce = (fn) => {
		let frame;
		return (...params) => {
			if (frame) {
				cancelAnimationFrame(frame);
			}

			frame = requestAnimationFrame(() => {
				fn(...params);
			});
		};
	};

	const storeScroll = () => {
		document.documentElement.dataset.scroll = window.scrollY;
	};

	document.addEventListener("scroll", debounce(storeScroll), {
		passive: true,
	});

	storeScroll();
}

export default App;
