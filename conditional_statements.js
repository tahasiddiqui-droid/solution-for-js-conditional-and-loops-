// ============================================================
//  CONDITIONAL STATEMENTS — JavaScript Practice Solutions
// ============================================================

// ─────────────────────────────────────────────────────────────
// Q1: Write a program that checks if a number is positive, negative, or zero.
// ─────────────────────────────────────────────────────────────
console.log("─── Q1: Positive, Negative, or Zero ───");
let number = -5;

if (number > 0) {
    console.log(`${number} is Positive`);
} else if (number < 0) {
    console.log(`${number} is Negative`);
} else {
    console.log("The number is Zero");
}

// ─────────────────────────────────────────────────────────────
// Q2: Using an if-else statement, determine whether a given integer is even or odd.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q2: Even or Odd ───");
let num = 7;

if (num % 2 === 0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}

// ─────────────────────────────────────────────────────────────
// Q3: Write a program that takes two numbers and prints the larger one.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q3: Largest of Two Numbers ───");
let a = 45, b = 78;

if (a > b) {
    console.log(`Larger number: ${a}`);
} else if (b > a) {
    console.log(`Larger number: ${b}`);
} else {
    console.log("Both numbers are equal");
}

// ─────────────────────────────────────────────────────────────
// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q4: Grade Evaluation ───");
let percentage = 85;

if (percentage >= 90) {
    console.log(`Score: ${percentage}% → Grade: A`);
} else if (percentage >= 80) {
    console.log(`Score: ${percentage}% → Grade: B`);
} else if (percentage >= 70) {
    console.log(`Score: ${percentage}% → Grade: C`);
} else if (percentage >= 60) {
    console.log(`Score: ${percentage}% → Grade: D`);
} else {
    console.log(`Score: ${percentage}% → Grade: F`);
}

// ─────────────────────────────────────────────────────────────
// Q5: Write a program that checks if a given year is a leap year.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q5: Leap Year Check ───");
let year = 2024;

// Leap year rules:
//   • Divisible by 4           → leap year
//   • But divisible by 100     → NOT a leap year
//   • Unless divisible by 400  → IS a leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap Year ✓`);
} else {
    console.log(`${year} is NOT a Leap Year ✗`);
}

// ─────────────────────────────────────────────────────────────
// Q6: Use a switch-case to print the name of the day (1 = Monday … 7 = Sunday).
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q6: Day of the Week ───");
let day = 3;

switch (day) {
    case 1:  console.log("Monday");    break;
    case 2:  console.log("Tuesday");   break;
    case 3:  console.log("Wednesday"); break;
    case 4:  console.log("Thursday");  break;
    case 5:  console.log("Friday");    break;
    case 6:  console.log("Saturday");  break;
    case 7:  console.log("Sunday");    break;
    default: console.log("Invalid day number. Please enter 1–7.");
}

// ─────────────────────────────────────────────────────────────
// Q7: Create a simple calculator using switch-case (+, -, *, /).
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q7: Switch Calculator ───");
let num1 = 20, num2 = 4, operator = '*';

switch (operator) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
    default:
        console.log("Invalid operator. Use +, -, *, or /");
}

// ─────────────────────────────────────────────────────────────
// Q8: Write a program that checks whether a given character is a vowel or consonant.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q8: Vowel or Consonant ───");
let char = 'e';

switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`'${char}' is a Vowel`);
        break;
    default:
        if (/[a-zA-Z]/.test(char)) {
            console.log(`'${char}' is a Consonant`);
        } else {
            console.log(`'${char}' is not an alphabetic character`);
        }
}

// ─────────────────────────────────────────────────────────────
// Q9: Using switch-case, print instructions based on traffic light color.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q9: Traffic Light System ───");
let color = 'Yellow';

switch (color.toLowerCase()) {
    case 'red':
        console.log("🔴 Red    → STOP");
        break;
    case 'yellow':
        console.log("🟡 Yellow → WAIT");
        break;
    case 'green':
        console.log("🟢 Green  → GO");
        break;
    default:
        console.log("Unknown light color. Please use Red, Yellow, or Green.");
}

// ─────────────────────────────────────────────────────────────
// Q10: Menu-driven program (1=Check Balance, 2=Deposit, 3=Withdraw, 4=Exit)
// Note: Input is simulated — in a real app use the readline module for live input.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q10: Menu-Driven Bank Program ───");
let balance = 1000;
let choice = 2;     // Simulated: user selects "Deposit"
let amount = 500;   // Simulated deposit amount

console.log("1. Check Balance  2. Deposit  3. Withdraw  4. Exit");
console.log(`Simulated choice: ${choice} | Amount: $${amount}\n`);

switch (choice) {
    case 1:
        console.log(`Current Balance: $${balance}`);
        break;
    case 2:
        balance += amount;
        console.log(`✅ Deposited $${amount}.  New Balance: $${balance}`);
        break;
    case 3:
        if (amount > balance) {
            console.log("❌ Insufficient funds.");
        } else {
            balance -= amount;
            console.log(`✅ Withdrew $${amount}.  Remaining Balance: $${balance}`);
        }
        break;
    case 4:
        console.log("👋 Thank you for banking with us. Goodbye!");
        break;
    default:
        console.log("❌ Invalid choice. Please select 1–4.");
}
