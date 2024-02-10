function firstUniqChar(s: string): number {
   const map = new Map()

    for (const iterator of s) {
        if (!map.get(iterator)) {
            map.set(iterator, 1)
        } else {
            map.set(iterator, map.get(iterator) + 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        console.log(map.get(s[i]))
        if (map.get(s[i]) === 1) {
            return i
        }
    }
    return -1 
};