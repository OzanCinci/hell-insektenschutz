#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Running npm run build..."
npm run build

echo "Generating static SEO pages..."
node scripts/create_static_indexes.js

echo "Replacing ./build/ contents with ./build_static/ contents..."

cp -r ./build_static/* ./build/

rm -rf ./build_static

echo "Static website build and SEO pages generation completed!"
