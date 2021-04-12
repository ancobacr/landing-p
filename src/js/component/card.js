import React from "react";

export function Card() {
	return (
		<div className="col">
			<div className="card h-100">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Morbi sagittis euismod purus, sit amet pulvinar dolor
						porttitor sit amet.
					</p>
				</div>
				<div className="card-footer justify-content-md-center">
					<button className="btn btn-primary">Find Out More!</button>
				</div>
			</div>
		</div>
	);
}
