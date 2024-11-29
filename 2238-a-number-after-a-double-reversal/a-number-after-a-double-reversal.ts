function isSameAfterReversals(num: number): boolean {
    if (num < 0 || num > Math.pow(10, 6)) return false;

    const firstNum = Number(String(num).split("").reverse().join(""));
    const second = Number(String(firstNum).split("").reverse().join(""));
    return num === second;
};