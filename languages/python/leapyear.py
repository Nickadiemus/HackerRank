def is_leap(year):
    leap = False
    if year % 4 == 0 and year % 400 == 0:
        leap = True
    elif year % 4 == 0 and year % 100 != 0:
        leap = True

    print leap
    return leap

year = int(raw_input())
is_leap(year)
