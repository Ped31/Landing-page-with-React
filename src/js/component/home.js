import React from "react";
import Header from "./header.jsx";
import Jumbo from "./jumbo.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Header />
			<Jumbo />
			<div className="row d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
