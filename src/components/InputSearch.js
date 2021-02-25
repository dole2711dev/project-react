import React, { useState, useEffect } from "react";
import "./InputSearch.css";

const InputSearch = () => {
	const STYLES = ["input-search-active", "input-search-close"];
	const [typeInputSearch, setTypeInputSearch] = useState(STYLES[0]);
	const handlerChangeTypeInputSearch = () => {
		if (window.innerWidth <= 960) {
			setTypeInputSearch(STYLES[1]);
		} else if (window.innerWidth >= 960 && typeInputSearch === STYLES[0]) {
			setTypeInputSearch(STYLES[1]);
		} else {
			setTypeInputSearch(STYLES[0]);
		}
	};
	useEffect(() => {
		window.addEventListener("resize", handlerChangeTypeInputSearch);
	}, [""]);

	return (
		<div className="input-search ml-30px mr-30px">
			<input
				type="text"
				className={typeInputSearch}
				placeholder="Search..."
			/>
			<span className="fas fa-search" />
		</div>
	);
};

export default InputSearch;
