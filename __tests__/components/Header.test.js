import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/Header.js";

describe("Header", () => {
	it("shows 3 navigation links", () => {
		const app = shallow(<Header />);

		expect(app.find("a")).toHaveLength(3);
		expect(
			app
				.find("a")
				.at(0)
				.text()
		).toEqual("Home");
		expect(
			app
				.find("a")
				.at(1)
				.text()
		).toEqual("Blog");
		expect(
			app
				.find("a")
				.at(2)
				.text()
		).toEqual("About");
	});
});
