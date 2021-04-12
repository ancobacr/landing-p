import React, { Fragment } from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Footer } from "./footer.js";
import { Feed } from "./feed.js";

//create your first component
export function Home() {
	return (
		<Fragment>
			<Navbar />
			<div className="container mt-1">
				<Jumbotron />
				<div>
					<Feed />
					<Feed />
					<Feed />
				</div>
			</div>
			<Footer className="container-fluid" />
		</Fragment>
	);
}
