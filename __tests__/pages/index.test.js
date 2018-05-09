import { shallow } from "enzyme";
import React from "react";
import App from "../../pages/index.js";

describe("Landing Page", () => {
	it('shows "Sunungukai"', () => {
		const app = shallow(<App />);

		expect(app.find("h1").text()).toEqual("Sunungukai");
	});
});
