#! /bin/bash

declare -a vols

if [[ "$IDE_DIR" != "" ]] ; then
  vols=("${vols[@]}" "-v" "${IDE_DIR}:${IDE_DIR}:ro")
fi

docker-compose run --rm --service-ports "${vols[@]}" dev node "$@"
