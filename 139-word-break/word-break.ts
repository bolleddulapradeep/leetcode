function wordBreak(s: string, wordDict: string[]) {
  const words = new Set(wordDict);
  const dpSet = new Array(s.length + 1).fill(false);

  dpSet[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dpSet[j] && words.has(s.slice(j, i))) {
        console.log(words.has(s.slice(j, i)), s.slice(j, i));
        dpSet[i] = true;
        break;
      }
    }
  }

  return dpSet[s.length];
}