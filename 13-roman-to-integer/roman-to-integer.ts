var romanToInt = function (s) {
  const ROMAN_NUMBERS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (!s) return 0;

  if (s.length > 15) return 0;

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (ROMAN_NUMBERS[s[i]] < ROMAN_NUMBERS[s[i + 1]]) {
      result -= ROMAN_NUMBERS[s[i]];
    } else {
      result += ROMAN_NUMBERS[s[i]];
    }
  }

  return result;
};
