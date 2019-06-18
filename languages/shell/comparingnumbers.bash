#!/bin/bash

# Author: Nicholas Sladic
# Date: 5/23/19


read x
read y

check () {
  if (( $1 > $2 )); then
    echo "X is greater than Y"
  elif (( $1 == $2 )); then
    echo "X is equal to Y"
  else
    echo "X is less than Y"
  fi
}

check $x $y
