// ======================================
// OBJECT QUESTIONS
// ======================================

// 1. Access object properties
const student = {
  name: "Ali",
  age: 20,
  grade: "A"
};
console.log("Access object properties:");
console.log(student.name);
console.log(student.age);
console.log(student.grade);


// 2. Loop through all keys and values using for...in
console.log("\nLoop through object (for...in):");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}


// 3. Object with methods (add, subtract, multiply, divide)
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
console.log("\nCalculator methods:");
console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
console.log(calculator.divide(6, 3));   // 2


// 4. Nested objects - access values inside a nested object
const studentWithAddress = {
  name: "Ali",
  address: {
    city: "Karachi",
    zip: "74200"
  }
};
console.log("\nNested object access:");
console.log(studentWithAddress.address.city); // Karachi


// 5. Convert object's keys and values into separate arrays
const keys = Object.keys(student);     // ["name", "age", "grade"]
const values = Object.values(student); // ["Ali", 20, "A"]
console.log("\nObject to arrays:");
console.log(keys);
console.log(values);
