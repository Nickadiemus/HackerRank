import math
import os
import random
import re
import sys

# Complete the misereNim function below.
# Rules
# Start with n pile of stones from 0 to n - 1
# Players move in alternating turns. Each turn a player must remove one or more stones from a single pile
# The player who removes the last stone loses

class player:
    def __init__(self, player):
        self.turn = False
        self.player = player

    def setTurn(self, status):
        self.turn = status

    def getTurn(self):
        return self.turn

def determineTurn(turn):
    if((turn % 2) == 0):
        return True
    else:
        return False

def misereNim(s):
    p1 = player(1)
    p2 = player(2)
    turn = 0
    pile = s
    while 0 < pile:
        if(determineTurn(turn)):
            turn += 1
