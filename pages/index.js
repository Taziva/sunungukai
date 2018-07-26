import "../sass/main.scss";

import Layout from "../components/Layout";
import Card from "../components/Card";

const Landing = () => (
	<Layout>
		<section className="landing">
			<div className="landing__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">Sunungukai</span>
					<span className="heading-primary--sub">
						Community Game Park and Lodging
					</span>
				</h1>
			</div>
		</section>
		<section className="section-info">
			<div className="section-info__video">
				<video
					className="section-info__video-player"
					width="100%"
					height="100%"
					controls
				>
					<source
						src="/static/videos/sunungukai-drone-view.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="section-info__text">
				<h2 className="heading-secondary">fantastic wildlife adventures</h2>
				<p className="paragraph">
					Come for an adventure in the African serengeti surrounded by beautiful
					scenery and natural phenomenons. Interact with local wildlife
					including Giraffe, Zebra and Eland. Witness exceptional predators in
					their local habitat. Discover historical cave paintings by bushmen
					from a time long lost.<br /> All this and more at sunungukai national
					park.
				</p>
			</div>
		</section>
		<section className="section-benefits">
			<Card section="benefits" title="Explore Africa">
				<p className="section-benefits__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
			<Card section="benefits" title="Explore Africa">
				<p className="section-benefits__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
			<Card section="benefits" title="Explore Africa">
				<p className="section-benefits__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
			<Card section="benefits" title="Explore Africa">
				<p className="section-benefits__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
		</section>
		<section className="section-activities">
			<h2 className="heading-secondary">activities and attractions</h2>
			<div className="section-activities__content">
				<div className="activity-card">
					<div className="activity-card__side activity-card__side--front">
						<div className="activity-card__picture activity-card__picture--1">
							&nbsp;
						</div>
						<h4 className="activity-card__heading">
							<span className="activity-card__heading-span activity-card__heading-span--1">
								Experience Wildlife
							</span>
						</h4>
						<div className="activity-card__details">
							<ul>
								<li>Game Walk $5</li>
								<li>Game Drive $5</li>
								<li>Umfurudzi Entrance $6</li>
							</ul>
						</div>
					</div>
					<div className="activity-card__side activity-card__side--back activity-card__side--back-1">
						<div className="activity-card__cta">
							<div className="activity-card__price-box">
								<p className="activity-card__price-only">Only</p>
								<p className="activity-card__price-value">$297</p>
							</div>
							<a href="#popup" className="btn btn--white">
								Book now!
							</a>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="activity-card__side activity-card__side--front">
						<div className="activity-card__picture activity-card__picture--2">
							&nbsp;
						</div>
						<h4 className="activity-card__heading">
							<span className="activity-card__heading-span activity-card__heading-span--2">
								Rest in the Getaway
							</span>
						</h4>
						<div className="activity-card__details">
							<ul>
								<li>Chalets (Day & Night)</li>
								<li>Chalets (Day)</li>
								<li>Camping</li>
							</ul>
						</div>
					</div>
					<div className="activity-card__side activity-card__side--back activity-card__side--back-2">
						<div className="activity-card__cta">
							<div className="activity-card__price-box">
								<p className="activity-card__price-only">Only</p>
								<p className="activity-card__price-value">$297</p>
							</div>
							<a href="#popup" className="btn btn--white">
								Book now!
							</a>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="activity-card__side activity-card__side--front">
						<div className="activity-card__picture activity-card__picture--3">
							&nbsp;
						</div>
						<h4 className="activity-card__heading">
							<span className="activity-card__heading-span activity-card__heading-span--3">
								Discover the landscape
							</span>
						</h4>
						<div className="activity-card__details">
							<ul>
								<li>Canoeing</li>
								<li>Day Trippers</li>
								<li>Hiking</li>
							</ul>
						</div>
					</div>
					<div className="activity-card__side activity-card__side--back activity-card__side--back-3">
						<div className="activity-card__cta">
							<div className="activity-card__price-box">
								<p className="activity-card__price-only">Only</p>
								<p className="activity-card__price-value">$297</p>
							</div>
							<a href="#popup" className="btn btn--white">
								Book now!
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section-social">
			<div className="section-social__media">
				<h1 className="section-social__media-heading heading-tertiary">
					Follow us on our journey
				</h1>
				<div className="section-social__media-icons">
					<div className="section-social__media-icons-link">
						<a href="#">
							<img
								src="/static/images/social/twitter.svg"
								alt="piggy-bank"
								height="62"
								width="62"
								className="section-social__media-icons-link-img"
							/>
						</a>
					</div>
					<div className="section-social__media-icons-link">
						<a href="#">
							<img
								src="/static/images/social/facebook.svg"
								alt="piggy-bank"
								height="62"
								width="62"
								className="section-social__media-icons-link-img"
							/>
						</a>
					</div>
					<div className="section-social__media-icons-link">
						<a href="#">
							<img
								src="/static/images/social/instagram.svg"
								alt="piggy-bank"
								height="62"
								width="62"
								className="section-social__media-icons-link-img"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Landing;
