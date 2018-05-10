import NavLink from "./navigation/NavLink";
const Header = () => (
	<nav className="nav">
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

export default Header;
