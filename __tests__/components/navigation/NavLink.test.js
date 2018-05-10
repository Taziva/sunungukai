import { shallow } from "enzyme";
import React from "react";
import NavLink from "../../../components/navigation/NavLink.js";

describe("NavLink", () => {
	it("shows a Header", () => {
		const app = shallow(<NavLink href="/" name="Home" />);

		expect(app.find("Link")).toHaveLength(1);
		expect(app.find("a")).toHaveLength(1);
		expect(app.find("a").text()).toEqual("Home");
	});
});
