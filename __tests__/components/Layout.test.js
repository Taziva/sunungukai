import { shallow } from "enzyme";
import React from "react";
import Layout from "../../components/Layout.js";

describe("Header", () => {
	it("shows 3 navigation links", () => {
		const app = shallow(<Layout />);

		expect(app.find("Header")).toHaveLength(1);
	});
});
