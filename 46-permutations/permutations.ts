function permute(nums: number[]): number[][] {
    const soluton: number[][] = [];
    const pushElement: any = [];
    const length = nums.length;
    function createPermtaton() {
        if (pushElement.length === length) {
            soluton.push([...pushElement]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!pushElement.includes(nums[i])) {
                pushElement.push(nums[i]);
                createPermtaton();
                pushElement.pop();
            }
        }
    }

    createPermtaton();

    return soluton;
};