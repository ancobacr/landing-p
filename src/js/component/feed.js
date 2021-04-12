import React from "react";
import { Card } from "./card.js";

export function Feed() {
	return (
		<div className="card-deek row row-cols-1 row-cols-md-4 mb-3">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}
