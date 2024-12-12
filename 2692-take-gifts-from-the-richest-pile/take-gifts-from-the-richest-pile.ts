function pickGifts(gifts: number[], k: number): number {
  while (k--) {
    const max = Math.max(...gifts);
    if (max === 1) break;

    const idx = gifts.indexOf(max);
    gifts[idx] = ~~Math.sqrt(max);
  }

  return gifts.reduce((acc, curr) => acc + curr, 0);
}