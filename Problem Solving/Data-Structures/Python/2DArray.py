import sys

def computeHourGlass(x,y, array):
    hgp = lambda x,y: [
        [x-1,y-1],[x-1,y],[x-1,y+1],
                    [x,y],
        [x+1,y-1],[x+1,y],[x+1,y+1]
    ]
    hg = hgp(x,y)
    sum = 0
    for i in range(len(hg)):
        sum += array[hg[i][0]][hg[i][1]]
    return sum


# Complete the hourglassSum function below.
def hourglassSum(arr):
    max = -sys.maxsize-1
    print(max)
    for x in range(1,5):
        for y in range(1,5):
            # print(arr[x][y], sep=",")
            cur = computeHourGlass(x,y,arr)
            if(cur > max):
                max = cur
                print(max)

    return max
arr = \
    [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
    ]

arr1 = \
    [
[-1,-1,0,-9,-2,-2],
[-2,-1,-6,-8,-2,-5],
[-1,-1,-1,-2,-3,-4],
[-1,-9,-2,-4,-4,-5],
[-7,-3,-3,-2,-9,-9],
[-1,-3,-1,-2,-4,-5],
    ]

hourglassSum(arr)
