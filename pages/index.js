import "../sass/main.scss";

import Layout from "../components/Layout";
import Card from "../components/Card";
import SocialMediaLink from "../components/SocialMediaLink";
import ActivityCard from "../components/ActivityCard";

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
				<ActivityCard
					title="Experience Wildlife"
					activities={["Game Walk", "Game Drive", "Umfurudzi Access"]}
					price={25}
					designNumber={1}
				/>
				<ActivityCard
					title="Rest in the Serengeti"
					activities={["Chalets (Day & Night)", "Chalets (Day)", "Camping"]}
					price={25}
					designNumber={2}
				/>
				<ActivityCard
					title="Discover the landscape"
					activities={["Canoeing", "Day Trips", "Hiking"]}
					price={25}
					designNumber={3}
				/>
			</div>
		</section>
		<section className="section-social">
			<div className="section-social__media">
				<h1 className="section-social__media-heading heading-tertiary">
					Follow us on our journey
				</h1>
				<div className="section-social__media-icons">
					<SocialMediaLink
						title="twitter"
						link="#"
						src="/static/images/social/twitter.svg"
					/>
					<SocialMediaLink
						title="facebook"
						link="#"
						src="/static/images/social/facebook.svg"
					/>
					<SocialMediaLink
						title="instagram"
						link="#"
						src="/static/images/social/instagram.svg"
					/>
				</div>
			</div>
		</section>
	</Layout>
);

export default Landing;
