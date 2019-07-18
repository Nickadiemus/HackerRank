#!/bin/bash

# Author: Nicholas Sladic
# Date: 5/23/19

read x
read y
read z

triangledef () {
  if (( $1 == $2 && $2 == $3 )); then
    echo "EQUILATERAL"
  elif (( $1 == $2 || $2 == $3 || $1 == $3 )); then
    echo "ISOSCELES"
  else
    echo "SCALENE"
  fi
}

triangledef $x $y $z
