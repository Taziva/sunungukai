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
		<section className="section-activities">
			<Card section="activities" title="Explore Africa">
				<p className="section-activities__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
			<Card section="activities" title="Explore Africa">
				<p className="section-activities__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
			<Card section="activities" title="Explore Africa">
				<p className="section-activities__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
			<Card section="activities" title="Explore Africa">
				<p className="section-activities__card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
					ipsum sapiente aspernatur.
				</p>
			</Card>
		</section>
	</Layout>
);

export default Landing;
