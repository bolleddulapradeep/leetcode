function findWordsContaining(words: string[], x: string): number[] {
  const stack = [];

  let left = 0;
  let right = words.length - 1;

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      stack.push(i);
    }
  }

  return stack;
}
