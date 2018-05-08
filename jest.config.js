module.exports = {
	setupFiles: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	collectCoverage: true,
	moduleNameMapper: {
		"\\.(scss)$": "<rootDir>/node_modules/jest-css-modules"
	}
};
