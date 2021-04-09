import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
            <h1>Hola</h1>
			{/*<Navbar />
			<Jumbotron />
			<div className="container-fluid">
				<div className="row m-auto">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>*/
		</div>
    ),
}
