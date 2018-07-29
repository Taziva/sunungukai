import NavLink from "./navigation/NavLink";
import { Component } from "react";

export default class Header extends Component {
	state = { activeClass: "" };

	componentDidMount() {
		window.addEventListener("scroll", event => {
			let activeClass;
			if (window.pageYOffset > 890) {
				activeClass = "fixed";
			} else {
				activeClass = "top";
			}
			this.setState({
				activeClass
			});
		});
	}

	render() {
		return (
			<nav className={`nav ${this.state.activeClass}`}>
				<div className="nav__logo">
					<p>Sunungukai</p>
				</div>
				<ul className="nav__list">
					<li>
						<NavLink href="/" name="Home" />
					</li>
					<li>
						<NavLink href="/blog" name="Blog" />
					</li>
					<li>
						<NavLink href="/about" name="About" />
					</li>
				</ul>
			</nav>
		);
	}
}
