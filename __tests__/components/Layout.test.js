import { shallow } from "enzyme";
import React from "react";
import Layout from "../../components/Layout.js";

describe("Layout", () => {
	const app = shallow(<Layout />);

	it("shows a Header", () => {
		expect(app.find("Header")).toHaveLength(1);
	});

	it("shows a Footer", () => {
		expect(app.find("Footer")).toHaveLength(1);
	});
});
