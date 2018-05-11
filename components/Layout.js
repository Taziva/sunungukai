import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
	<div>
		<Header />
		<main className="page">{props.children}</main>
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
