import { mount } from "enzyme";
import React from "react";
import Header from "../../components/Header.js";

describe("Header", () => {
	it("shows 3 navigation links", () => {
		const app = mount(<Header />);

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
});
