import random

# Using the input function, ask the user for a string. The string must be 10 characters long.
#     If it’s less than 10 characters, print a message which states “string not long enough”.
#     If it’s more than 10 characters, print a message which states “string too long”.

input_string = input ("Please enter a string with max 10 characters ")
input_string_lengh = len(input_string)

if (input_string_lengh < 10):
    print("string not long enough")
elif (input_string_lengh > 10):
    print("string too long")
else :
    print(f"string entered is", input_string)


# Then, print the first and last characters of the given text.
first_char = input_string[0]
last_char = input_string [9]

print("the first character of the string is",first_char,"and last character is",last_char)

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# Hello World
word_pattern = ""
for char in input_string:
    if char == " ":
        word_pattern += char
    else :
        word_pattern += char
        print(word_pattern)


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod

random_shuffle = ''.join(random.sample(input_string,input_string_lengh))
print(random_shuffle)




