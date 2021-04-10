import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					<strong>Start Boostrap</strong>
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo02">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"
                             tabindex="-1"
								aria-disabled="true">>
								Contact  
							</a>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	);
}
