import Stack from 'stack-lifo';

function reverseString(string) {
  let stack = new Stack();

  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  let returningString = '';

  while (!stack.isEmpty()) {
    returningString = returningString.concat(stack.pop());
  }

  return returningString;
}

function isPalindrome(string) {
  const cleaned = string.replace(/\s/g, '');
  const reversed = reverseString(cleaned);

  return reversed === cleaned.toLowerCase();
}

const testString = 'saippuakauppias';
console.log(reverseString(testString));
console.log(isPalindrome(testString));

export { reverseString, isPalindrome };
