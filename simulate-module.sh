#!/usr/bin/env bash

echo "Create dummy npm module"

rm -rf node_modules/@my-org
cp -rf template/@my-org node_modules/@my-org

echo "Success"
