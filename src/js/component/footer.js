import React from "react";

export function Footer() {
	return (
		<div className="bg-dark p-3 align-self-end">
			<footer className="footer text-white text-center">
				<small>
					{" "}
					Copyright &copy;
					<a href="#"> Your Website </a>
					{new Date().getFullYear()}{" "}
				</small>
			</footer>
		</div>
	);
}
