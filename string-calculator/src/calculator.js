function add(numbers) {
    if (numbers === '') {
      return 0;
    }
  
    let delimiter = /,|\n/; // Default delimiters: comma or newline
    let numbersToProcess = numbers;
  
    // Check for custom delimiter
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
      // Use custom delimiter along with default ones
      const customDelimiter = customDelimiterMatch[1];
      delimiter = new RegExp(`[${customDelimiter},\\n]`); // Combine custom, comma, and newline
      numbersToProcess = numbers.split('\n').slice(1).join('\n'); // Remove custom delimiter line
    }
  
    // Split by the delimiter(s) and sum the numbers
    return numbersToProcess
      .split(delimiter) // Split by the detected delimiter(s)
      .map((num) => parseInt(num, 10)) // Convert strings to integers
      .reduce((sum, num) => sum + num, 0); // Calculate the sum
  }
  
  module.exports = { add };
  