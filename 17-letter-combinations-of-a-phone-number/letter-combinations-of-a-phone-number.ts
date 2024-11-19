function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const NUMBERS = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result: string[] = [];

  function createCombinations(str: string, numbers: string) {
    if (numbers.length === 0) {
      result.push(str);
    } else {
      for (const letter of NUMBERS[numbers[0]]) {
        createCombinations(str + letter, numbers.slice(1));
      }
    }
  }
  createCombinations("", digits);
  return result;
}