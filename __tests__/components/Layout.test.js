import { shallow } from "enzyme";
import React from "react";
import Layout from "../../components/Layout.js";

describe("Layout", () => {
	it("shows a Header", () => {
		const app = shallow(<Layout />);

		expect(app.find("Header")).toHaveLength(1);
	});
});
