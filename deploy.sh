#!/usr/bin/env sh

set -e

npm run build

cd dist
cp index.html 404.html

git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:augustotx/augustotx.github.io.git master:gh-pages

cd -
