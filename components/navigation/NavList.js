import NavLink from "./NavLink";

const NavList = props => (
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
);

export default NavList;
