function isAnagram(s: string, t: string): boolean {
      if (s.length !== t.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const element in obj1) {
    if (obj1[element] !== obj2[element]) {
      return false;
    }
  }

  return true;
};