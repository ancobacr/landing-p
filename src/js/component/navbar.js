import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					<strong>Start Boostrap</strong>
				</a>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								About
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Services
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Contact
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true"></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
