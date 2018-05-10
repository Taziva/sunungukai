import Link from "next/link";
import PropTypes from "prop-types";

const NavLink = props => (
	<Link href={props.href}>
		<a className="nav__link">{props.name}</a>
	</Link>
);

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default NavLink;
