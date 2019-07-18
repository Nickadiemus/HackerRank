import random

def generateLetter():
    n = random.randint(0,128)
    return chr(n)

i = 0
text = generateLetter()
for i in xrange(0,100000):
    text += generateLetter()
    print text
