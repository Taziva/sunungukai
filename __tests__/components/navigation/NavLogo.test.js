import { shallow } from "enzyme";
import React from "react";
import NavLogo from "../../../components/navigation/NavLogo.js";

describe("NavLogo", () => {
	it("shows a Header", () => {
		const app = shallow(<NavLogo />);

		expect(app.find("img")).toHaveLength(1);
		expect(app.find("p")).toHaveLength(1);
		expect(app.find("p").text()).toContain("Sunungukai");
	});
});
