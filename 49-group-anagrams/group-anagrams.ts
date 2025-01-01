function groupAnagrams(strs: string[]): string[][] {
    const obj = {};
    for (const element of strs) {
        const sort = element.split("").sort().join("");
        if (!obj[sort]) {
        obj[sort] = [];
        }

        obj[sort].push(element);
    }
    return Object.values(obj);
};