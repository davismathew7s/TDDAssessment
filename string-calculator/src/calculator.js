function add(numbers) {
    if (!numbers) {
      return 0;
    }
  
    // Handle custom delimiters
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      delimiter = numbers.slice(2, delimiterIndex); // Extract delimiter
      numbers = numbers.slice(delimiterIndex + 1); // Remove delimiter line
    }
  
    // Split the string based on the custom delimiter or the default (comma + newline)
    const regex = new RegExp(`[${delimiter},\n]`, 'g');
    const numberArray = numbers.split(regex).filter(num => num !== '');
  
    // Check for negative numbers
    const negativeNumbers = numberArray.filter(num => parseInt(num, 10) < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    // Convert numbers to integers and sum them, ignoring numbers greater than 1000
    return numberArray.reduce((sum, num) => {
        const number = parseInt(num, 10);
        return number > 1000 ? sum : sum + number;
    }, 0);
  }
  
  module.exports = { add };
  