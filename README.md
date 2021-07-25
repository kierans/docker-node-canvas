# docker-node-canvas

Sample project using node-canvas in Docker for https://youtrack.jetbrains.com/issue/WEB-22179

## Setup

This project demonstrates the usage of [node-canvas](https://www.npmjs.com/package/node-canvas)
in a Docker Container. The project contains a sample HTTP app that pretends to use the `Canvas`
and a test that pretends to do something with the `Canvas`.

The focus is not on the actual app/test but the ability to run/debug the Javascript code that 
uses native code (ie: `node-canvas`) in a Docker container from Webstorm.

The `Dockerfile` will build an image that contains all the native tools/libraries required
to build `node-canvas`.

The `docker-compose.yml` contains a service definition (`dev`) that can launch a container
suitable for running code that uses `node-canvas`. The project root directory is volume mapped
into the container to make source changes instantly available to the container.

The `./bin/node.sh` script wraps the `node` binary in the container passing arguments to it.

The `./bin/npm.sh` script wraps the `npm` binary in the container passing arguments to it. As
the `node_modules` is written on the host, actions like installing `node-canvas` execute inside
the container, with compiled code being Docker compatible while saving the results of the
installation on the host.

## Usage

Build the development Docker image

```shell
$ make dev
```

Install the modules.

```shell
$ ./bin/npm.sh install
```

### Debug the app
Run the app using a Node.js Run Configuration. Make sure that the working directory of the Run 
Configuration is the project root dir, not the `src` dir.

Specify the node interpreter one of two ways:

1. Using the `./bin/node.sh` as the Project Interpreter (this can also be run in the shell)

```shell
$ ./bin/node.sh src/main.js
```

2. Add a [Remote Interpreter](https://www.jetbrains.com/help/webstorm/node-with-docker.html#ws_node_configure_remote_node_interpreter_docker_compose)
that uses the Docker Compose file and the `dev` service.
   
If using a Remote Interpreter, place a breakpoint in `src/main.js` and debug the run configuration. 
This is where the Remote Interpreter option is superior as it allows the debugging of the app.

(**Note** If you see an error about the Inspector already being activated, [upvote the YouTrack issue](https://youtrack.jetbrains.com/issue/WEB-49957))

3. Make a request to the HTTP server

```shell
$ curl http://localhost:3000
```

### Run the test

Open `test/canvas.test.js` and run via the Mocha Run Configuration type.

1. Set the Project Interpreter to `./bin/node.sh`
2. In order to make WebStorm's mocha reporter available set an `IDE` env var to the root of where
   WebStorm is installed.

### Debug the test

You can't.

Because there is no option to make a Remote Interpreter for running the tests, it is not possible
to debug the test. This is why issue WEB-22179 needs to be implemented.
