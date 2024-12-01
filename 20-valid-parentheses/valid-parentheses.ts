function isValid(s: string): boolean {
    const array: string[] = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                array.push(")");
                break;
            case "{":
                array.push("}");
                break;
            case "[":
                array.push("]");
                break;
            case array[array.length - 1]:
                array.pop();
                break;
            default:
                return false;
        }
    }
    return array.length === 0 ? true : false;
};