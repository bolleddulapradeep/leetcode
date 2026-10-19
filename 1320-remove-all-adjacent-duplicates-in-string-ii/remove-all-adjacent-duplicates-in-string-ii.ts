function removeDuplicates(s: string, k: number): string {
  const stack: [string, number][]= [];
  for (const str of s) {
    let top = stack[stack.length-1];
    if (top && top[0] === str) {
      top[1] = top[1] + 1;
      if(top[1] === k){
        stack.pop();
      }
    } else {
      stack.push([str, 1]);
    }
  }

  return stack.map(([str, count]) => str.repeat(count)).join('');
}