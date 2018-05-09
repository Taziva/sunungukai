import { shallow } from "enzyme";
import React from "react";
import App from "../../pages/index.js";

describe("Landing Page", () => {
	const app = shallow(<App />);

	it("has a Layout", () => {
		expect(app.find("Layout")).toHaveLength(1);
	});

	describe("landing section", () => {
		it("shows page heading", () => {
			expect(app.find(".heading-primary--main").text()).toEqual("Sunungukai");
			expect(app.find(".heading-primary--sub").text()).toEqual(
				"Community Game Park and Lodging"
			);
		});
	});

	describe("about section", () => {
		it("has a video", () => {
			expect(app.find("video")).toHaveLength(1);
		});
		it("has a text area", () => {
			expect(app.find(".section-about__text")).toHaveLength(1);
		});
	});
});
