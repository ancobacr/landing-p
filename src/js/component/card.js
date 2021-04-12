import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={props.imageUrl}
					className="card-img-top img-fluid"
					alt={props.imageAlt}
					style={{ background: "#dfe6e9" }}
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardText}</p>
				</div>
				<div className="card-footer text-center">
					<button className="btn btn-primary">Find Out More!</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	cardTitle: PropTypes.string.isRequired,
	cardText: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	imageAlt: PropTypes.string
};

Card.defaultProps = {
	cardTitle: "Card Title",
	cardText: "Description",
	imageUrl: "...",
	imageAlt: "author"
};
