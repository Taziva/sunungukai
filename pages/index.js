import "../sass/main.scss";

import Layout from "../components/Layout";

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
		<section className="section-about">
			<div className="section-about__video">
				<video
					className="section-about__video-player"
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
			<div className="section-about__text">
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
	</Layout>
);

export default Landing;
