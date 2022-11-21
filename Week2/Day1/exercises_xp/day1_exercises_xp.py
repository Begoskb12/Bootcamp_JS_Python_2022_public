# ~~~~~~~~~~~~~~~~Exercise 1 : Hello World~~~~~~~~~~~~~~~~~~~~~~~~
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

print("Hello world\n"*4)


# ~~~~~~~~~~~~~~~~Exercise 2 : Some Math~~~~~~~~~~~~~~~~~~~~~~~~
# Write code that calculates the result of: (99^3) * 8 (99 to the power of 3 times 8)
calculation = pow(99, 3) * 8
print (calculation)

# ~~~~~~~~~~~~~~~~Exercise 3 : What is the output ?~~~~~~~~~~~~~~~~~~~~~~~~


# Predict the output of the following code snippets:

# # >>> 5 < 3
# # prediction : false

# # >>> 3 == 3
# prediction : true

# # >>> 3 == "3"
# prediction : false

# # >>> "3" > 3
# prediction : false

# # >>> "Hello" == "hello"
# prediction : false


# ~~~~~~~~~~~~~~~~ Exercise 4 : Your computer brand~~~~~~~~~~~~~~~~~~~~~~~~

# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".


computer_brand = "HP"

print( "I have a", computer_brand, "computer.")

# ~~~~~~~~~~~~~~~~ Exercise 5 : Your information~~~~~~~~~~~~~~~~~~~~~~~~


# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = "Shrutee"
age = 28
shoe_size = 35
info = (f"My name is {name} and I am {age} years old. I wear shoes of size {shoe_size}.")

print(info)



# ~~~~~~~~~~~~~~~~ Exercise 6 : A & B~~~~~~~~~~~~~~~~~~~~~~~~

# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.


a = 25
b = 12

if a > b :
    print("Hello World")


# ~~~~~~~~~~~~~~~~ Exercise 7 : Odd or Even~~~~~~~~~~~~~~~~~~~~~~~~

# Write code that asks the user for a number and determines whether this number is odd or even.

number_input = int(input("Please enter a number: "))

if (number_input % 2 == 0):
    print("The number entered is even")
else :
    print("The number entered is odd")


# ~~~~~~~~~~~~~~~~ Exercise 8 : What’s your name ?~~~~~~~~~~~~~~~~~~~~~~~~
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

name_input = input("Please enter your name: ")
dev_name = "Shrutee"

if (name_input.lower == dev_name.lower):
    print("Hey ", name_input, " this code was written by someone having the same name as you")
else :
    print("Hello ", name_input, "!")


# ~~~~~~~~~~~~~~~~ Tall enough to ride a roller coaster~~~~~~~~~~~~~~~~~~~~~~~~


# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.


heignt_inches = int(input("Please enter your height in inches: "))

heignt_cm = heignt_inches * 2.54

if (heignt_cm > 145):
    print("Yay, you are tall enought to ride")
else :
    print("Oops sorry, you are not tall enough to ride.")
