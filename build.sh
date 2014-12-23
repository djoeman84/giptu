#!/bin/bash


browserify -t -t cssify ./src/__init__.js > ./public/bundle.js