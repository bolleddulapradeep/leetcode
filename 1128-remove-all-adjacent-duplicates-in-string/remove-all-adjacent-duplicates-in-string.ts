function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for (const str of s) {
    if (stack[stack.length - 1] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.join("");
}