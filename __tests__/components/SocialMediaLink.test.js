import { shallow } from "enzyme";
import React from "react";

import SocialMediaLink from "../../components/SocialMediaLink";

describe("SocialMediaLink", () => {
	let socialMediaLinkWrapper;
	const title = "Title";
	const link = "www.example.com";
	const src = "test.png";

	beforeEach(() => {
		socialMediaLinkWrapper = shallow(
			<SocialMediaLink title={title} link={link} src={src} />
		);
	});

	it("has a title", () => {
		expect(socialMediaLinkWrapper.find("a")).toHaveLength(1);
		expect(socialMediaLinkWrapper.find("a").prop("href")).toEqual(link);
	});
	it("has an image", () => {
		expect(socialMediaLinkWrapper.find("img")).toHaveLength(1);
		expect(socialMediaLinkWrapper.find("img").prop("src")).toEqual(src);
		expect(socialMediaLinkWrapper.find("img").prop("alt")).toEqual(title);
	});
});
