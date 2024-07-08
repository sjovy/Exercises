function getCurrentDateTime() {
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const time = `${hours}:${minutes}:${seconds}`;
    
    const formats = [
        `${month}-${day}-${year}`,
        `${month}/${day}/${year}`,
        `${day}-${month}-${year}`,
        `${day}/${month}/${year}`
    ];
    
    console.log("Current date and time:");
    formats.forEach(format => {
        console.log(`${format}, ${time}`);
    });
}

// Call the function to display the current date and time
getCurrentDateTime();


function isLeapYear(year) {
    // Leap year is divisible by 4
    // But if it's also divisible by 100, it's not a leap year
    // Unless it's also divisible by 400, then it is a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test the function
function testLeapYear(year) {
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage
testLeapYear(2000);  // Leap year
testLeapYear(2100);  // Not a leap year
testLeapYear(2024);  // Leap year
testLeapYear(2023);  // Not a leap year


function findSundayNewYears(startYear, endYear) {
    let sundayNewYears = [];

    for (let year = startYear; year <= endYear; year++) {
        let date = new Date(year, 0, 1);  // January 1st of the year
        if (date.getDay() === 0) {  // 0 represents Sunday
            sundayNewYears.push(year);
        }
    }

    return sundayNewYears;
}

// Set the range
const startYear = 2014;
const endYear = 2050;

// Find the years where January 1st is a Sunday
const result = findSundayNewYears(startYear, endYear);

// Display the results
console.log(`Years between ${startYear} and ${endYear} where January 1st is a Sunday:`);
console.log(result.join(', '));
console.log(`Total count: ${result.length}`);


function getNumberInput(promptText) {
    while (true) {
        let input = prompt(promptText);
        let number = parseFloat(input);
        
        if (!isNaN(number)) {
            return number;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Get user input
let num1 = getNumberInput("Enter the first number:");
let num2 = getNumberInput("Enter the second number:");

// Perform calculations
let multiplicationResult = multiply(num1, num2);
let divisionResult = divide(num1, num2);

// Display results
alert(`Multiplication result: ${num1} * ${num2} = ${multiplicationResult}`);
alert(`Division result: ${num1} / ${num2} = ${divisionResult}`);