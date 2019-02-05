#!/bin/bash

if cd ..
then
npx webpack
else
    echo "Failure to cd for webpack."
fi
if cd build
then
    gsutil rsync -R . gs://www.patchdayhrt.com
else
    echo "Failure to cd for gsutil rsync."
fi
echo "Synchronization complete."