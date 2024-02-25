// Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL:

// 1. 
let var1, var2, var3;

// 2. 
// Legal variable names:
var myVariable;
var userName;
var _counter;
var $price;
var firstName;

// Illegal variable names:
// let 1variable; // Cannot start with a number
// let my-variable; // Hyphens are not allowed
// let my variable; // Space is not allowed
// let my#variable; // Special characters other than $ and _ are not allowed
// let for; // Reserved keyword

// 3. 
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, $, and _.</p>");
document.write("<p>Variables must begin with a letter, $, or _.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be JS reserved keywords.</p>");


// Chapter 5 MATH EXPRESSIONS:

// 1. 
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
document.write("The sum of 5 and 3 is: " + sum);

// 2. 
let difference = num1 - num2;
document.write("<br>The difference is: " + difference);

// 3. 
let product = num1 * num2;
document.write("<br>The product is: " + product);

// 4. 
let quotient = num1 / num2;
document.write("<br>The quotient is: " + quotient);

// 5. 
let modulus = num1 % num2;
document.write("<br>The modulus is: " + modulus);

// 6. 
let value;
document.write("<br>Value after variable declaration is: " + value);
value = 5;
document.write("<br>Initial value: " + value);
value++;
document.write("<br>Value after increment is: " + value);
value += 7;
document.write("<br>Value after addition is: " + value);
value--;
document.write("<br>Value after decrement is: " + value);
let remainder = value % 3;
document.write("<br>The remainder is: " + remainder);

// 7. 
const ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("<br>Total cost to buy 5 tickets is: " + totalCost + " PKR");

// 8.
let totalMarks = 500;
let obtainedMarks = 420;
let percentage = (obtainedMarks / totalMarks) * 100;
document.write("<br>Percentage: " + percentage + "%");

// 9. 
let dollars = 10;
let riyals = 25;
let totalRupees = dollars * 104.80 + riyals * 28;
document.write("<br>Total currency in PKR: " + totalRupees + " PKR");

// 10. 
let result = ((num1 + 5) * 10) / 2;
document.write("<br>Result of arithmetic sequence: " + result);

// 11. 
let currentYear = 2024;
let birthYear = 1990;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("<br>They are either " + age1 + " or " + age2 + " years old");

// 12. 
let radius = 5;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);

// 13.
let favoriteSnack = "Chocolate";
let currentAge = 30;
let maximumAge = 80;
let amountPerDay = 2;
let yearsRemaining = maximumAge - currentAge;
let totalNeeded = yearsRemaining * 365 * amountPerDay;
document.write("<br>You will need " + totalNeeded + " " + favoriteSnack + " to last you until the age of " + maximumAge);


// Chapter 6-9 MATH EXPRESSIONS:

// 1.
var a = 10;
document.write("The value of a is: " + a,"</br>");

a++;
document.write("The value of ++a is: " + a,"</br>");
document.write("Now the value of a is: " + a,"</br>");

document.write("The value of a++ is: " + a,"</br>");
a++;
document.write("Now the value of a is: " + a,"</br>");

--a;
document.write("The value of --a is: " + a,"</br>");
document.write("Now the value of a is: " + a,"</br>");

document.write("The value of a-- is: " + a,"</br>");
a--;
document.write("Now the value of a is: " + 10,"</br>")





// 2. 
var a = 2, b = 1;
var c = --a - --b + ++b + b--;
// --a;       // 1,  a is pre-decremented to 1
// --a - --b; // 1 - 0, a is pre-decremented to 0, b is pre-decremented to 0
// --a - --b + ++b; // 1 - 0 + 1, b is pre-incremented to 1
// --a - --b + ++b + b--; // 1 - 0 + 1 + 1, b is post-decremented from 1 to 0
// result = 1 - 0 + 1 + 1 = 3
document.write("<br>Result of expression is: " + result);


// 3.
var Name = prompt("Please enter your name:");
if (Name !== null && Name.trim() !== "") {
    alert("Hello, " + Name + "! Welcome!");
} else {
    alert("Hello! Welcome!");
}


// 4/5.
var number = +prompt("Enter table number..");

document.write(
  number +
    "x 1 =" +
    number * 1 +
    "<br>" +
    number +
    "x 2 =" +
    number * 2 +
    "<br>" +
    number +
    "x 3 =" +
    number * 3 +
    "<br>" +
    number +
    "x 4 =" +
    number * 4 +
    "<br>" +
    number +
    "x 5 =" +
    number * 5 +
    "<br>" +
    number +
    "x 6 =" +
    number * 6 +
    "<br>" +
    number +
    "x 7 =" +
    number * 7 +
    "<br>" +
    number +
    "x 8 =" +
    number * 8 +
    "<br>" +
    number +
    "x 9 =" +
    number * 9 +
    "<br>" +
    number +
    "x 10 =" +
    number * 10 +
    "<br>"
);


// 6.
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");


var total = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (total * 3)) * 100;


var message = "Result:\n\n";
message += "Subject\t\tTotal Marks\tObtained Marks\n";
message += subject1 + "\t\t" + total + "\t\t" + obtainedMarks1 + "\n";
message += subject2 + "\t\t" + total + "\t\t" + obtainedMarks2 + "\n";
message += subject3 + "\t\t" + total + "\t\t" + obtainedMarks3 + "\n\n";
message += "Total Obtained Marks: " + totalObtainedMarks + "\n";
message += "Percentage: " + totalPercentage.toFixed(2) + "%";


alert(message);


// Home [PDF] chp6-9:

// Chapter 6 (Math Expression II):

// 1.
var x = 5;
x += 1;
document.write("Result of x += 1: " + x + "<br>");

// 2.
x = 100;
x -= 1;
document.write("Result of x -= 1 when x = 100: " + x + "<br>");

// 3.
var x = 50;
var y = x++;
document.write("Value of y after x++ where x = 50: " + y + "<br>");

// 4.
var y = 50;
var z = --y;
document.write("Value of z after --y where y = 50: " + z + "<br>");

// 5.
var num = 10;
var newNum = --num;
document.write("Original value of num decremented and assigned to newNum: " + newNum + "<br>");

// 6.
var variableName = 5;
var originalValue = variableName;
var anotherVariable = ++variableName;
document.write("Original value of variableName: " + originalValue + "<br>");
document.write("Value of anotherVariable after adding 1 to variableName: " + anotherVariable + "<br>");

// 7.
var numberValue = 10;
numberValue++;
document.write("Incremented value of numberValue using alert: ");
alert(numberValue);

// Chapter 7 (Math Expression III):

// 1.
var calculatedNum1 = 2 + (2 * 6);
document.write("Result of 2 + (2 * 6): " + calculatedNum1 + "<br>");

// 2.
var calculatedNum2 = (2 + 2) * 6;
document.write("Result of (2 + 2) * 6: " + calculatedNum2 + "<br>");

// 3.
var calculatedNum3 = (2 + 2) * (4 + 2);
document.write("Result of (2 + 2) * (4 + 2): " + calculatedNum3 + "<br>");

// 4.
var calculatedNum4 = ((2 + 2) * 4) + 2;
document.write("Result of ((2 + 2) * 4) + 2: " + calculatedNum4 + "<br>");

// 5.
var cost = (2 + 2) * (4 + 10);
document.write("Result of 2 + 2 * 4 + 10 with parentheses: " + cost + "<br>");

// 6.
var units = 2 + (2 * (4 + 10));
document.write("Result of 2 + 2 * 4 + 10 with parentheses: " + units + "<br>");

// 7.
var pressure = (4 / 2) * 4;
document.write("Result of 4 / 2 * 4 with parentheses: " + pressure + "<br>");

// Chapter 8 (Concatenating Text Strings):

// 1.
var num = "2" + "2";
document.write("Concatenation of '2' and '2': " + num + "<br>");

// 2.
var message = "Hello," + "Dolly";
document.write("Concatenation of 'Hello,' and 'Dolly': " + message + "<br>");

// 3.
alert("33" + 3); 
document.write("Alert displays: '333'" + "<br>");

// 4.
alert("Pakistan " + "Zindabad");
document.write("Alert displays: 'Pakistan Zindabad'" + "<br>");

// 5.
var concatenatedString = "String" + 123;
document.write("Concatenation of 'String' and '123': " + concatenatedString + "<br>");

// 6.
var str1 = "Hello";
var str2 = "World";
var str3 = str1 + str2;
document.write("Concatenation of 'Hello' and 'World': " + str3 + "<br>");

// Chapter 9 (Prompts):

// 1.
var firstName = prompt("Enter first name");
document.write("First name entered: " + firstName + "<br>");

// 2.
var country = prompt("Country?", "China");
document.write("Country entered: " + country + "<br>");

// 3. Correction
var yourName = prompt("Enter Your Name");
document.write("Your name entered: " + yourName + "<br>");

// 4.
var userInput = prompt("Enter input", "default");
document.write("User input: " + userInput + "<br>");

// 5.
var variable1 = "Prompt message";
var variable2 = "Default response";
var variable3 = prompt(variable1, variable2);
document.write("User input using prompts: " + variable3 + "<br>");

// 6.
var response = prompt("Enter something", "Default response");
document.write("User response using prompt: " + response + "<br>");
