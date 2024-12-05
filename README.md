**String Calculator** TDD Kata project:

---

# String Calculator TDD Kata

This is an implementation of a simple string calculator, written using **Test-Driven Development (TDD)** principles. The calculator performs basic summation of numbers provided in a comma-separated string format.

## Problem Statement

The calculator should have an `add` function that takes a string of comma-separated numbers and returns the sum of those numbers.

### Requirements:

- If the input string is empty, the result should be `0`.
- If the input string contains a single number, return that number.
- If the input string contains two or more numbers, return their sum.

### Examples:

#### Input: `""`
- **Output**: `0`

#### Input: `"1"`
- **Output**: `1`

#### Input: `"1,5"`
- **Output**: `6`

---

## Getting Started

To run the project and tests locally, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine. If not, you can download and install them from the official website: [https://nodejs.org](https://nodejs.org).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/string-calculator.git
   ```

2. Navigate into the project directory:
   ```bash
   cd string-calculator
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will run the test suite using **Jest** and show the results in the terminal.

### Example

To test the functionality of the calculator, you can run:

```javascript
const calculator = require('./src/calculator');

console.log(calculator.add('')); // 0
console.log(calculator.add('1')); // 1
console.log(calculator.add('1,5')); // 6
```

---

## Project Structure

```
string-calculator/
├── src/
│   └── calculator.js        # Contains the add function
├── tests/
│   └── calculator.test.js   # Test cases for the add function
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

---

## Technologies Used

- **JavaScript**: The programming language used to implement the solution.
- **Jest**: The testing framework used to write and run the tests.

---

## TDD Process

This project was developed following **Test-Driven Development (TDD)** principles. The development process included:

1. Writing a test for the simplest case (empty string returns 0).
2. Implementing the functionality to pass the test.
3. Refactoring the code after each passing test.
4. Adding more tests to handle more complex cases (single number, two numbers, etc.).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify and expand this README according to your needs.