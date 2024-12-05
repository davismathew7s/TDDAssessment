function add(numbers) {
    if (numbers === '') {
      return 0;
    }
  
    // Validation to reject invalid patterns
    if (/,\n|\n,|,$/.test(numbers)) {
        throw new Error('Invalid input format');
    }

    // Replace new lines with commas, then split and sum the numbers
    return numbers
      .replace(/\n/g, ',') // Replace new lines with commas
      .split(',') // Split by commas
      .map((num) => parseInt(num, 10)) // Convert strings to integers
      .reduce((sum, num) => sum + num, 0); // Calculate the sum
  }
  
  module.exports = { add };
  