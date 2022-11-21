# # ~~~~~~~~~~~~~~~~Exercise 1 : Hello World-I love Python~~~~~~~~~~~~~~~~~~~~~~~~

# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print("Hello world\n"*4 + "I love python\n"*4)

# # ~~~~~~~~~~~~~~~~Exercise 2 : What is the Season ?~~~~~~~~~~~~~~~~~~~~~~~~

# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)


input_month = int(input ("Please enter month number: "))

# season = "Spring" if (range (3,5)) else "Summer" if (range(6,8)) else "Autumn" if (range(9,11)) else "Winter"

# print(season)

# if (input_month > 3 or input_month < 5):
#     print("Spring")
# elif (input_month > 6 or input_month < 8):
#     print("Summer")
# elif (input_month > 9 or input_month < 11):
#     print("Autumn")
# else :
#     print("Winter")


if (input_month in range (3,5)):
    print("Spring")
elif (input_month in range (6,8)):
    print("Summer")
elif (input_month in range (9,11)):
    print("Autumn")
else :
    print("Winter")


