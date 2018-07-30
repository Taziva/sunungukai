import { mount } from "enzyme";
import React from "react";
import Header from "../../components/Header.js";

describe("Header", () => {
	let app;

	beforeEach(() => {
		app = mount(<Header />);
	});

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

	describe("when toggle nav is clicked", () => {
		beforeEach(() => {
			app.find(".icon").simulate("click");
		});
		it("adds the responsive class to the nav", () => {
			expect(app.find(".nav").hasClass("responsive")).toEqual(true);
			expect(app.state().responsiveClass).toEqual("responsive");
		});
		it("removes the responsive class from the nav", () => {
			app.find(".icon").simulate("click");
			expect(app.find(".nav").hasClass("responsive")).toEqual(false);
			expect(app.state().responsiveClass).toEqual("");
		});
	});
});

const simulateScroll = pageYOffset => {
	global.pageYOffset = pageYOffset;
	global.dispatchEvent(new global.UIEvent("scroll", { detail: 0 }));
};
