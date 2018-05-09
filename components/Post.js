import PropTypes from "prop-types";

const Post = ({ post }) => (
	<div className="post">
		<div className="row">
			<div className="col-12 col-md-4">
				<img className="img-fluid" src={post.image.secure_url} />
			</div>
			<div className="col-12 col-md-8">
				<h2>{post.title}</h2>
				<div
					className="post__content"
					dangerouslySetInnerHTML={{ __html: post.content.brief }}
				/>
			</div>
		</div>
	</div>
);

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
