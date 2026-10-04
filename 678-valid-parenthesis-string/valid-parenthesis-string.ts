function checkValidString(s: string): boolean {
    let open = 0;
    let close = 0;

    for(let i=0; i<s.length; i++){
        switch(true){
            case s[i] === '(':
                open = open +1;
                close = close + 1;
                break;
            case s[i] === ')':
                if(close === 0) return false;
                open = Math.max(0, open - 1);
                close = close -1;
                break;
            default:
                open = Math.max(0, open -1);
                close = close+1;
        }
    }
return open === 0;
};