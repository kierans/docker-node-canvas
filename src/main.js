"use strict";

const http = require("http");

/*
 * This is enough to load node-canvas' binary module. Thus if not running in a Docker container
 * the app won't load.
 */
const { Canvas } = require("canvas");

const PORT = process.env.PORT || 3000

const server = http.createServer((request, response) => {
	console.log(`${request.method.toUpperCase()} ${request.url}`);

	response.writeHead(200, {
		"Content-Type": "text/plain"
	});

	response.end("Hello, World!\n");
})

server.on("listening", () => { console.log(`Server listening on ${PORT}`) });

server.listen(PORT);
