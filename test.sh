#!/usr/bin/env bash

MODE=${1:-'dev'}

npm run $MODE
grep "\`<" dist/app.js && echo "not cool"
