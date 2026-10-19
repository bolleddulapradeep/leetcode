function targetIndices(nums: number[], target: number): number[] {
    let small = 0;
    let equal = 0;

    for(const num of nums){
        if(num < target) small++;
        else if(num === target) equal++;
    }

    const stack = []

    for(let i=0;i<equal;i++){
        stack.push(small+i);
    }

    return stack;
};