function intToRoman(num: number): string {
  let result = "";
  const ROMAN_NUMBERS = [
    {
      value: 1000,
      label: "M",
    },
    {
      value: 900,
      label: "CM",
    },
    {
      value: 500,
      label: "D",
    },
    {
      value: 400,
      label: "CD",
    },
    {
      value: 100,
      label: "C",
    },
    {
      value: 90,
      label: "XC",
    },
    {
      value: 50,
      label: "L",
    },
    {
      value: 40,
      label: "XL",
    },
    {
      value: 10,
      label: "X",
    },
    {
      value: 9,
      label: "IX",
    },
    {
      value: 5,
      label: "V",
    },
    {
      value: 4,
      label: "IV",
    },
    {
      value: 1,
      label: "I",
    },
  ];

  for (const { label, value } of ROMAN_NUMBERS) {
    while (num >= value) {
      result += label;
      num -= value;
    }
  }

  return result;
}