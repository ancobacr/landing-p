import React, { Fragment } from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron className="mt-1" />
			<div className="container-fluid mt-1">
				<div className="row row-cols-1 row-cols-md-4 m-auto">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
