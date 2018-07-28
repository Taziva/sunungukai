import { shallow } from "enzyme";
import React from "react";

import ActivityCard from "../../components/ActivityCard";

describe("ActivityCard", () => {
	let ActivityCardWrapper;
	const title = "Title";
	const activities = ["swimming", "running", "flying"];
	const price = 25;
	const designNumber = 1;

	beforeEach(() => {
		ActivityCardWrapper = shallow(
			<ActivityCard
				title={title}
				activities={activities}
				price={price}
				designNumber={designNumber}
			/>
		);
	});

	it("has a title", () => {
		expect(ActivityCardWrapper.find("h4")).toHaveLength(1);
		expect(ActivityCardWrapper.find("h4").text()).toEqual(title);
	});
	it("has a list of activities", () => {
		expect(ActivityCardWrapper.find("ul")).toHaveLength(1);
		expect(ActivityCardWrapper.find("li")).toHaveLength(activities.length);
	});
	it("has a price", () => {
		expect(
			ActivityCardWrapper.find(".activity-card__price-value")
		).toHaveLength(1);
		expect(
			ActivityCardWrapper.find(".activity-card__price-value").text()
		).toEqual(`$${price}`);
	});
});
