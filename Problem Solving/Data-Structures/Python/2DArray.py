
def computeHourGlass(position, arr):
    hgp = lambda p: [[p - 1, p - 1], [p, p - 1], [p + 1, p - 1], [ p, p ], [p - 1, p + 1],[p, p + 1],[p + 1, p + 1]]
    hg = hgp(position)
    sum = 0
    for i in range(len(hg)):
        sum = sum + arr[hg[i][0],hg[i][1]]
    return sum


# Complete the hourglassSum function below.
def hourglassSum(arr):
    max = 0
    for x in range(1,2):
        for y in range(1,2):
            cur = computeHourGlass(arr[x][y],arr)
            if(cur > max):
                max = cur
                print(max)

arr = \
    [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
    ]

hourglassSum(arr)
