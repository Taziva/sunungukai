import NavLink from "./navigation/NavLink";
import { Component } from "react";

export default class Header extends Component {
	state = { activeClass: "", responsiveClass: "" };

	componentDidMount() {
		window.addEventListener("scroll", event => {
			let activeClass = this.state.activeClass;
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

	toggleResponsiveNav() {
		const navigation = this.navigation;
		const responsiveClass = "responsive";
		const activeClass = this.state.responsiveClass;
		if (!navigation.className.includes(responsiveClass)) {
			this.setState({
				responsiveClass: activeClass + responsiveClass
			});
		} else {
			this.setState({
				responsiveClass: activeClass.replace(responsiveClass, "")
			});
		}
	}

	render() {
		return (
			<nav
				className={`nav ${this.state.activeClass} ${
					this.state.responsiveClass
				}`}
				ref={navigation => {
					this.navigation = navigation;
				}}
			>
				<div className="nav__row">
					<div className="nav__logo">
						<p>Sunungukai</p>
					</div>
					<div className="nav__responsive-toggle">
						<a className="icon" onClick={this.toggleResponsiveNav.bind(this)}>
							<img
								src="static/images/menu-button-of-three-horizontal-lines.svg"
								width={16}
							/>
						</a>
					</div>
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
