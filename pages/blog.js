import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import Post from "../components/Post";
import "../sass/main.scss";

class Blog extends Component {
	static async getInitialProps() {
		let response = await axios.get("/api/posts", {
			proxy: { port: process.env.PORT || 3000 }
		});
		return { posts: response.data };
	}

	render() {
		return (
			<Layout>
				<section className="section-blog">
					<div className="container">
						<div className="header">
							<h1>Sunungukai</h1>
						</div>
						<div className="content">
							{this.props.posts.map((post, i) => {
								return <Post post={post} key={i} />;
							})}
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}

Blog.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object)
};

export default Blog;
