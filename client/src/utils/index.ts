export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const splitItemsList = (items: any[], config?: any) => {
  const chunks = [];
  const { size = 3, random = false } = config || {};
  let current = 0;
  let chunkSize = size;
  if (random) {
    chunkSize = getRandomInt(1, size);
  }
  while (current < items.length) {
    chunks.push(items.slice(current, current + chunkSize));
    current += chunkSize;
    if (random) {
      chunkSize = getRandomInt(1, size);
    }
  }
  return chunks;
};
