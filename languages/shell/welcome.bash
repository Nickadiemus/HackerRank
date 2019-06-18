#!/bin/bash

# Author: Nicholas Sladic
# Date: 5/22/19

# For cmd line args
# echo "Welcome $1"

sed -r 's/(.*)/Welcome \1/g'
