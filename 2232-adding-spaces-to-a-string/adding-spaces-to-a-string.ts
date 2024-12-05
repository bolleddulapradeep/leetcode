function addSpaces(s: string, spaces: number[]): string {
    if (
        !s.length ||
        s.length > 3 * Math.pow(10, 5) ||
        spaces.length > 3 * Math.pow(10, 5)
    )
    return "";
    let str = 0;
    let stringValue = "";

    for (let i = 0; i < spaces.length; i++) {
        while (str < spaces[i]) {
            stringValue += s[str];
            str++;
        }
        stringValue += " ";
    }
    while (str < s.length) {
        stringValue += s[str++];
    }
    return stringValue;
};