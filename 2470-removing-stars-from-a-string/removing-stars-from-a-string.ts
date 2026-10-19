function removeStars(s: string): string {
    if(!s) return '';

    if(s.length > (10**5)) return ''

    const strArray = [];

    for(let i=0; i<s.length; i++){
        if(s[i] === '*' && strArray.length) {
            strArray.pop();
        } else {
            strArray.push(s[i])
        }
    }

    return strArray.join('')
};