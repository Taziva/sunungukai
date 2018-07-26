import PropTypes from "prop-types";

const SocialMediaLink = ({ title, link, src }) => (
	<div className="section-social__media-icons-link">
		<a href={link}>
			<img
				src={src}
				alt={title}
				height="62"
				width="62"
				className="section-social__media-icons-link-img"
			/>
		</a>
	</div>
);

SocialMediaLink.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired
};

export default SocialMediaLink;
