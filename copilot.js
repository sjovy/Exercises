// 1. JavaScript program to display the current day and time in various formats

function displayCurrentDateTime() {
    // Create a new Date object
    const now = new Date();

    // Extract the day, month, and year from the Date object
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = now.getFullYear();

    // Format the date in mm-dd-yyyy and mm/dd/yyyy
    const format1 = `${month}-${day}-${year}`;
    const format2 = `${month}/${day}/${year}`;

    // Format the date in dd-mm-yyyy and dd/mm/yyyy
    const format3 = `${day}-${month}-${year}`;
    const format4 = `${day}/${month}/${year}`;

    // Display the formatted dates
    console.log(format1);
    console.log(format2);
    console.log(format3);
    console.log(format4);
}

// Call the function to display the current day and time
displayCurrentDateTime();


// 2. JavaScript program to determine whether a given year is a leap year

function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            if (year % 400 === 0) {
                return true; // Leap year
            } else {
                return false; // Not a leap year
            }
        } else {
            return true; // Leap year
        }
    } else {
        return false; // Not a leap year
    }
}

// Test the function
const year = 2024;
console.log(isLeapYear(year)); // Output: true

const year2 = 2022;
console.log(isLeapYear(year2)); // Output: false


// 3. JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050

function isFirstJanuarySunday() {
    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, 0, 1); // Create a new Date object for 1st January of the current year
        if (date.getDay() === 0) {
            console.log(`1st January ${year} is a Sunday`);
        }
    }
}

// Call the function to check if 1st January is a Sunday between 2014 and 2050
isFirstJanuarySunday();


// 5. JavaScript program to convert temperatures to and from Celsius, Fahrenheit

function convertTemperature(temperature, unit) {
    if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (temperature * 9/5) + 32;
        return fahrenheit;
    } else if (unit === 'F') {
        // Convert Fahrenheit to Celsius
        const celsius = (temperature - 32) * 5/9;
        return celsius;
    } else {
        console.log('Invalid unit');
    }
}

// Test the function
const celsiusTemperature = 25;
const convertedToFahrenheit = convertTemperature(celsiusTemperature, 'C');
console.log(`${celsiusTemperature} degrees Celsius is equal to ${convertedToFahrenheit} degrees Fahrenheit`);

const fahrenheitTemperature = 77;
const convertedToCelsius = convertTemperature(fahrenheitTemperature, 'F');
console.log(`${fahrenheitTemperature} degrees Fahrenheit is equal to ${convertedToCelsius} degrees Celsius`);


// 6. JavaScript program to remove a character at the specified position in a given string

function removeCharacter(str, position) {
    // Convert the string to an array
    const arr = str.split('');

    // Remove the character at the specified position
    arr.splice(position, 1);

    // Convert the array back to a string
    const modifiedStr = arr.join('');

    // Return the modified string
    return modifiedStr;
}

// Test the function
const inputString = 'Hello, World!';
const positionToRemove = 7;
const modifiedString = removeCharacter(inputString, positionToRemove);
console.log(`Modified string: ${modifiedString}`);


// 7. JavaScript program to reverse a given string

function reverseString(str) {
    // Convert the string to an array
    const arr = str.split('');

    // Reverse the array
    const reversedArr = arr.reverse();

    // Convert the array back to a string
    const reversedStr = reversedArr.join('');

    // Return the reversed string
    return reversedStr;
}

// Test the function
const inputString = 'Hello, World!';
const reversedString = reverseString(inputString);
console.log(`Reversed string: ${reversedString}`);


// 8. JavaScript program to calculate the sum of all elements in an array

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test the function
const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log(`Sum of all elements: ${sum}`);


// 9. JavaScript program to find the largest element in an array

function findLargestElement(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Test the function
const numbers = [10, 5, 20, 15, 30];
const largestElement = findLargestElement(numbers);
console.log(`Largest element: ${largestElement}`);


// 10. JavaScript program to filter out even numbers from an array

function filterEvenNumbers(arr) {
    // Use the filter method to create a new array with only the even numbers
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}

// Test the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(`Even numbers: ${evenNumbers}`);