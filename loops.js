// ============================================================
//  LOOP PRACTICE — JavaScript Solutions
// ============================================================

// ─────────────────────────────────────────────────────────────
// Q1: Write a program using a for loop to print numbers from 1 to 10.
// ─────────────────────────────────────────────────────────────
console.log("─── Q1: Print Numbers 1 to 10 ───");
let output1 = "";
for (let i = 1; i <= 10; i++) {
    output1 += i + " ";
}
console.log(output1.trim());

// ─────────────────────────────────────────────────────────────
// Q2: Use a while loop to calculate the sum of the first N natural numbers.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q2: Sum of First N Natural Numbers ───");
let N = 10;
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}
console.log(`Sum of first ${N} natural numbers = ${sum}`);
//  1+2+3+…+10 = 55

// ─────────────────────────────────────────────────────────────
// Q3: Print the multiplication table of a given number using a for loop.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q3: Multiplication Table ───");
let tableNum = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} × ${i} = ${tableNum * i}`);
}

// ─────────────────────────────────────────────────────────────
// Q4: Write a program using a while loop to find the factorial of a given number.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q4: Factorial Calculation ───");
let n = 6;
let factorial = 1;
let j = 1;

while (j <= n) {
    factorial *= j;
    j++;
}
console.log(`${n}! = ${factorial}`);
//  6! = 6×5×4×3×2×1 = 720

// ─────────────────────────────────────────────────────────────
// Q5: Print numbers from 10 down to 1 using a for loop.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q5: Reverse Counting ───");
let output5 = "";
for (let i = 10; i >= 1; i--) {
    output5 += i + " ";
}
console.log(output5.trim());

// ─────────────────────────────────────────────────────────────
// Q6: Use a do-while loop to print all even numbers up to N.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q6: Even Numbers up to N ───");
let limit = 20;
let k = 2;
let evens = "";

do {
    evens += k + " ";
    k += 2;
} while (k <= limit);

console.log(`Even numbers up to ${limit}: ${evens.trim()}`);

// ─────────────────────────────────────────────────────────────
// Q7: Write a program using a while loop to calculate the sum of digits of a given number.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q7: Sum of Digits ───");
let originalNum = 12345;
let temp = originalNum;
let digitSum = 0;

while (temp > 0) {
    digitSum += temp % 10;      // Extract last digit
    temp = Math.floor(temp / 10); // Remove last digit
}
console.log(`Sum of digits of ${originalNum} = ${digitSum}`);
//  1 + 2 + 3 + 4 + 5 = 15

// ─────────────────────────────────────────────────────────────
// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q8: Fibonacci Series (First 10 Terms) ───");
let fibA = 0, fibB = 1;
let fibSeries = [fibA, fibB];

for (let i = 2; i < 10; i++) {
    let next = fibA + fibB;
    fibSeries.push(next);
    fibA = fibB;
    fibB = next;
}
console.log(fibSeries.join(", "));
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// ─────────────────────────────────────────────────────────────
// Q9: Use a do-while loop to keep asking for a number until the correct one is guessed.
// Note: Input is simulated — in a real app use the readline module for live input.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q9: Guessing Game ───");
const correctNumber = 7;
const simulatedGuesses = [3, 9, 5, 7]; // Simulated player guesses
let guessIndex = 0;
let guess;

console.log("(Simulated game — the secret number is 7)\n");

do {
    guess = simulatedGuesses[guessIndex++];

    if (guess < correctNumber) {
        console.log(`Guess ${guess} → Too Low!  Try higher.`);
    } else if (guess > correctNumber) {
        console.log(`Guess ${guess} → Too High! Try lower.`);
    } else {
        console.log(`Guess ${guess} → 🎉 Correct! You found it in ${guessIndex} attempt(s)!`);
    }
} while (guess !== correctNumber);

// ─────────────────────────────────────────────────────────────
// Q10: Write a program using a for loop to check if a given number is prime.
// ─────────────────────────────────────────────────────────────
console.log("\n─── Q10: Prime Number Check ───");
let primeNum = 29;
let isPrime = primeNum > 1; // 0 and 1 are not prime by definition

for (let i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break; // No need to check further
    }
}

if (isPrime) {
    console.log(`${primeNum} is a Prime Number ✓`);
} else {
    console.log(`${primeNum} is NOT a Prime Number ✗`);
}
