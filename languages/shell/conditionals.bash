#!/bin/bash

# Author: Nicholas Sladic
# Date: 5/23/19

read -n1 input

if [ $input == "y" ] || [ $input == "Y" ]; then
  echo "YES"
else
  echo "NO"
fi
