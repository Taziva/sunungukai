import { shallow } from "enzyme";
import React from "react";
import Footer from "../../components/Footer.js";

describe("Footer", () => {
	it("shows a Header", () => {
		const app = shallow(<Footer />);

		expect(app.find("p").text()).toEqual("© Idealisme Sombre");
	});
});
