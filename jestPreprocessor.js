const babel = require("babel-core");
const jestPreset = require("babel-preset-jest");

module.exports = {
	process: function(src) {
		const transformCfg = {
			presets: [
				jestPreset,
				["next/babel", { "preset-env": { modules: "commonjs" } }]
			],
			retainLines: true
		};
		return babel.transform(src, transformCfg).code;
	}
};
