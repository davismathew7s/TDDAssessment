# String Calculator TDD Kata

This is an implementation of a simple string calculator, written using **Test-Driven Development (TDD)** principles. The calculator performs basic summation of numbers provided in a comma-separated string format, with extended functionality to handle custom delimiters, newlines, and multiple delimiters.

## Problem Statement

The calculator should have an `add` function that takes a string of comma-separated numbers and returns the sum of those numbers. It supports the following features:

- If the input string is empty, the result should be `0`.
- If the input string contains a single number, return that number.
- If the input string contains two or more numbers, return their sum.
- The calculator supports custom delimiters defined at the start of the string.
- The input string can include numbers separated by newlines.

### Requirements:

- If the input string is empty, the result should be `0`.
- If the input string contains a single number, return that number.
- If the input string contains two or more numbers, return their sum.
- Handle newlines between numbers (e.g., `"1\n2,3"` should return `6`).
- Allow custom delimiters at the start of the string (e.g., `"//;\n1;2"` should return `3`).
- The first line in the string can define a custom delimiter, which should replace the default comma (`,`).

### Examples:

#### Input: `""`
- **Output**: `0`

#### Input: `"1"`
- **Output**: `1`

#### Input: `"1,5"`
- **Output**: `6`

#### Input: `"1\n2,3"`
- **Output**: `6`

#### Input: `"//;\n1;2"`
- **Output**: `3`

#### Input: `"//|\n1|2|3"`
- **Output**: `6`

#### Input: `"//#\n1#2#3"`
- **Output**: `6`

#### Input: `"//;\n1;2\n3,4"`
- **Output**: `10`

---

## Getting Started

To run the project and tests locally, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine. If not, you can download and install them from the official website: [https://nodejs.org](https://nodejs.org).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/davismathew7s/TDDAssessment.git
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

### Updates Summary:
- The README now includes explanations for the new features (newlines, custom delimiters, and mixed delimiters).
- The structure and usage examples reflect the additional functionality of custom delimiters and newlines.
- Instructions for running tests, using the functionality, and project structure have been updated to match the expanded functionality.