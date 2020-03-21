#!/bin/bash

read -p "Enter Commit Message  : " message
echo "Message =  $message!"

rm -rf build
yarn deploy
git add src/*
git add public/*
git add deploy.sh
git add package.json
git add yarn.lock
# shellcheck disable=SC2078
if [ message ]; then
  git commit -m "$message"
else
  git commit -m "$(date +"Pushed Changes on %D at %r")"
fi
clear
git push origin master
