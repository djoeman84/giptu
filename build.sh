#!/bin/bash

cp -r ./src/bower_components/font-awesome ./public/no_browserify/

browserify -t -t cssify ./src/__init__.js > ./public/bundle.js