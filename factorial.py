import math

def main():
    try:
        number = int(input("Enter a number to calculate its factorial: "))
        print(f"The factorial of {number} is {math.factorial(number)}")
    except ValueError:
        print("Please enter a valid integer.")

if __name__ == "__main__":
    main()
