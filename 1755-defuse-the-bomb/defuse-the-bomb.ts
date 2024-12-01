function decrypt(code: number[], k: number): number[] {
    const length = code.length;
    const decodeArray = Array(code.length).fill(0);
    if (k === 0) return decodeArray;

    const isNegative = k < 0 ? -1 : 1;
    k = Math.abs(k);

    for (let i = 0; i < length; i++) {
        for (let j = 1; j <= k; j++) {
            const bl = i + isNegative * j + length;
            const idx = bl % length;
            decodeArray[i] += code[idx];
        }
    }

    return decodeArray;
};