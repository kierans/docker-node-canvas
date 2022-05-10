"use strict";

/*
 * This is enough to load node-canvas' binary module. Thus if not running in a Docker container
 * the app won't load.
 */
const { Canvas } = require("canvas");

describe("using node-canvas", function() {
	/*
	 * If not running in a Docker container this will fail to load the binary code.
	 */
	it("should use node-canvas", function() {
		// as long as the test executes all is well
		const t = 1
	});
});
