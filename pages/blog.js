import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import "../sass/main.scss";

class Blog extends Component {
	static async getInitialProps() {
		let response = await axios.get("http://localhost:3000/api/posts");
		return { posts: response.data };
	}

	render() {
		return (
			<Layout>
				<div className="container">
					<style jsx>{`
						.header {
							padding: 16px 16px;
						}
						.content {
							padding: 16px 16px;
						}
						.post {
							margin-bottom: 16px;
						}
					`}</style>
					<div className="header">
						<h1>Sunungukai</h1>
					</div>
					<div className="content">
						{this.props.posts.map((post, i) => {
							return (
								<div className="post" key={i}>
									<div className="row">
										<div className="col-12 col-md-4">
											<img
												className="img-fluid"
												src={post.image.secure_url}
												width="50%"
											/>
										</div>
										<div className="col-12 col-md-8">
											<h2>{post.title}</h2>
											<div
												dangerouslySetInnerHTML={{ __html: post.content.brief }}
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Layout>
		);
	}
}

Blog.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object)
};

export default Blog;
