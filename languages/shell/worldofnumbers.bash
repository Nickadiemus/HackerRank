#!/bin/bash

# Author: Nicholas Sladic
# Date: 5/22/19

read x
read y
printf "%s\n" $x{+,-,*,/}"($y)" | bc
