#! /bin/bash

docker-compose run --rm --service-ports dev npm "$@"
