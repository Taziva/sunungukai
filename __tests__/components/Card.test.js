import { shallow } from "enzyme";
import React from "react";

import Card from "../../components/Card";

describe("Card", () => {
	let cardWrapper;

	beforeEach(() => {
		cardWrapper = shallow(<Card title="Title" section="test" />);
	});

	it("has a title", () => {
		expect(cardWrapper.find("h3")).toHaveLength(1);
		expect(cardWrapper.find("h3").text()).toEqual("Title");
	});
	it("has correct classes", () => {
		expect(cardWrapper.find(".section-test__card")).toHaveLength(1);
		expect(cardWrapper.find(".section-test__card-title")).toHaveLength(1);
	});
});
