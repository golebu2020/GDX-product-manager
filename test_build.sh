#!/usr/bin/env bash

docker-compose build
docker-compose run app sh -c 'python manage.py wait_for_db && python manage.py test' 
