import { mount } from "enzyme";
import React from "react";
import Header from "../../components/Header.js";

describe("Header", () => {
	const app = mount(<Header />);
	it("shows 3 navigation links", () => {
		expect(app.find("NavLink")).toHaveLength(3);
		expect(
			app
				.find("NavLink")
				.at(0)
				.text()
		).toEqual("Home");
		expect(
			app
				.find("NavLink")
				.at(1)
				.text()
		).toEqual("Blog");
		expect(
			app
				.find("NavLink")
				.at(2)
				.text()
		).toEqual("About");
	});

	it("has a state activeClass", () => {
		expect(app.state().activeClass).toEqual("");
	});

	describe("when scrolling over and under page offset 900", () => {
		it("changes the activeClass", () => {
			simulateScroll(910);
			expect(app.state().activeClass).toEqual("fixed");
			simulateScroll(890);
			expect(app.state().activeClass).toEqual("top");
		});
	});
});

const simulateScroll = pageYOffset => {
	global.pageYOffset = pageYOffset;
	global.dispatchEvent(new global.UIEvent("scroll", { detail: 0 }));
};
