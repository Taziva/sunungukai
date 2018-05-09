import { shallow } from "enzyme";
import React from "react";

import Post from "../../components/Post";

describe("Post", () => {
	let postWrapper;
	const post = {
		title: "Title",
		image: {
			secure_url: "https://example.com"
		},
		content: {
			brief: "Brief"
		}
	};
	beforeEach(() => {
		postWrapper = shallow(<Post post={post} />);
	});

	it("has a title", () => {
		expect(postWrapper.find("h2")).toHaveLength(1);
		expect(postWrapper.find("h2").text()).toEqual("Title");
	});
	it("has an image", () => {
		expect(postWrapper.find("img")).toHaveLength(1);
		expect(postWrapper.find("img").prop("src")).toEqual("https://example.com");
	});
	it("has text content", () => {
		postWrapper = shallow(<Post post={post} index={1} />);
		expect(postWrapper.find(".post__content")).toHaveLength(1);
		expect(postWrapper.find(".post__content").html()).toContain("Brief");
	});
});
