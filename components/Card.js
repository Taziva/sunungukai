import PropTypes from "prop-types";

const Card = props => (
	<div className={`card section-${props.section}__card`}>
		<h3
			className={`section-${
				props.section
			}__card-title heading-tertiary u-margin-bottom-small`}
		>
			{props.title}
		</h3>
		{props.children}
	</div>
);

Card.propTypes = {
	section: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node
};

export default Card;
