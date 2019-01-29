# # Complete the kangaroo function below.
# class animal:
#     def __init__(self,pos, v):
#         self.position = pos
#         self.velocity = v
#
#
# def kangaroo(x1, v1, x2, v2):
#     # k1 = animal(x1,v1)
#     # k2 = animal(x2,v2)
#     k1 = x1
#     k2 = x2
#     i = 0
#     while i <= 10000:
#         # k1.position += k1.velocity
#         # k2.position += k2.velocity
#         # if (compare(k1, k2)):
#         #     print("YES")
#         #     exit()
#         k1 += v1
#         k2 += v2
#         if (compare(k1, k2)):
#             print("YES")
#             break
#         i += 1
#
#     if(not(compare(k1,k2))):
#         print("NO")
#
# def compare(x1,x2):
#     print("K1: " + str(x1) + " == " + "K2: " + str(x2))
#
#     if x1 == x2:
#         return True
#     else:
#         return False

def kangaroo(x1, v1, x2, v2):
    eq1 = lambda t : x1 + v1*t
    eq2 = lambda t : x2 + v2*t
    i = 0
    found = False
    for i in range(10001):

        # print("i: " + str(i) +" | X1: " + str(eq1(i)) + " == " + "X2: " + str(eq2(i)))
        if(eq1(i) == eq2(i)):
            found = True

    if(found):
        return "YES"
    else:
        return "NO"

kangaroo(1571, 4240, 9023,4234)
