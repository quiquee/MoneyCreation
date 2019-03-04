#!/bin/sh
rm -Rf docs
sed "s/\=\//=/g" < dist/index.html.bak > dist/index.html
mv dist docs
git add docs

