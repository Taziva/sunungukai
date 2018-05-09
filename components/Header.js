import Link from "next/link";

const Header = () => (
	<nav className="nav">
		<div className="nav__logo">
			<p>Sunungukai</p>
		</div>
		<ul className="nav__list">
			<li>
				<Link href="/">
					<a className="nav__link">Home</a>
				</Link>
			</li>
			<li>
				<Link href="/blog">
					<a className="nav__link">Blog</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a className="nav__link">About</a>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Header;
