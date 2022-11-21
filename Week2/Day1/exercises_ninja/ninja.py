
# # ~~~~~~~~~~~~~~~~Exercise 1 : Use the terminal~~~~~~~~~~~~~~~~~~~~~~~~

# Run this command in the terminal to open a python console:

# $ python3

# Hint: Replace python3 with python for Windows

# Read about the PATH variable. Try to explain why you can call python3 if you aren’t in the executable directory.
# PATH explanation can be found here.


# # ~~~~~~~~~~~~~~~~Exercise 2 : Alias~~~~~~~~~~~~~~~~~~~~~~~~

# Read about alias, and try to open a python console with the command:

# $ py


# # ~~~~~~~~~~~~~~~~Exercise 3 : Outputs~~~~~~~~~~~~~~~~~~~~~~~~

# Predict the output of the following code snippets:

# >>> 3 <= 3 < 9
# prediction : true

# >>> 3 == 3 == 3
# prediction : true

# >>> bool(0)
# prediction : false

# >>> bool(5 == "5")
# prediction : false

# >>> bool(4 == 4) == bool("4" == "4")
# prediction : true

# >>> bool(bool(None))
# prediction :

# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10

# print("x is", x)
# prediction : x is true
# print("y is", y)
# prediction : y is false
# print("a:", a)
# prediction : a: 5
# print("b:", b)
# prediction : b: 10


# # ~~~~~~~~~~~~~~~~Exercise 4 : How many characters in a sentence ?~~~~~~~~~~~~~~~~~~~~~~~~



# Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

print (len(my_text))


# # ~~~~~~~~~~~~~~~~Exercise 5: Longest word without a specific character~~~~~~~~~~~~~~~~~~~~~~~~


# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

input_sentence = input("Please enter a sentence without using 'A' ").lower()
longest_sentence = 0
substring = "a".lower()
count = 0

while True:
    input_sentence
    if substring not in input_sentence:
        print("Congratulations!")
        break





