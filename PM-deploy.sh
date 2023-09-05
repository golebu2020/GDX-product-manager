#!/usr/bin/env bash

export TAG=$1

docker-compose -f PM-docker-compose-prod.yaml up -d
