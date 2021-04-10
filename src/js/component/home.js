import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
//import { Card } from "./card.js";
import { Footer } from "./footer.js";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron className="mt-1" />
			<div className="container-fluid mt-1">
				<div className="row row-cols-1 row-cols-md-3 m-auto">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
}
