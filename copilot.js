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


// 4. JavaScript program to calculate multiplication and division of two numbers (input from the user)

function calculateMultiplicationAndDivision() {
    // Get input from the user
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    // Calculate multiplication and division
    const multiplication = num1 * num2;
    const division = num1 / num2;

    // Display the results
    console.log(`Multiplication: ${multiplication}`);
    console.log(`Division: ${division}`);
}

// Call the function to calculate multiplication and division
calculateMultiplicationAndDivision();


