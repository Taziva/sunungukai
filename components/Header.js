import { Component } from "react";
import NavList from "./navigation/NavList";
import NavLogo from "./navigation/NavLogo";

export default class Header extends Component {
	state = { activeClass: "", responsiveClass: "" };

	componentDidMount() {
		window.addEventListener("scroll", event => {
			let activeClass = this.state.activeClass;
			if (window.pageYOffset > 870) {
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
					<NavLogo />
					<div className="nav__responsive-toggle">
						<a className="icon" onClick={this.toggleResponsiveNav.bind(this)}>
							<img
								src="static/images/menu-button-of-three-horizontal-lines.svg"
								width={16}
							/>
						</a>
					</div>
				</div>
				<NavList />
			</nav>
		);
	}
}
