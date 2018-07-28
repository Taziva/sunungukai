import PropTypes from "prop-types";

const ActivityCard = ({ title, activities, price, designNumber }) => (
	<div className="activity-card">
		<div className="activity-card__side activity-card__side--front">
			<div
				className={`activity-card__picture activity-card__picture--${designNumber}`}
			>
				&nbsp;
			</div>
			<h4 className="activity-card__heading">
				<span
					className={`activity-card__heading-span activity-card__heading-span--${designNumber}`}
				>
					{title}
				</span>
			</h4>
			<div className="activity-card__details">
				<ul>
					{activities.map((activity, index) => {
						return <li key={`${index + activity}`}>{activity}</li>;
					})}
				</ul>
			</div>
		</div>
		<div
			className={`activity-card__side activity-card__side--back activity-card__side--back-${designNumber}`}
		>
			<div className="activity-card__cta">
				<div className="activity-card__price-box">
					<p className="activity-card__price-only">Only</p>
					<p className="activity-card__price-value">{`$${price}`}</p>
				</div>
				<a href="#" className="btn btn--white">
					Book now!
				</a>
			</div>
		</div>
	</div>
);

ActivityCard.propTypes = {
	activities: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	designNumber: PropTypes.oneOf(Array.from({ length: 3 }, (v, k) => k + 1))
};

export default ActivityCard;
