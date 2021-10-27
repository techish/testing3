const references = [];const allocateSize = (size) => {
  const numbers = size / 8;
  const arr = [];
  arr.length = numbers;
  for (let i = 0; i < numbers; i++) {
    arr[i] = i;
  }
  return arr;
};while (true) {
  //steps of 100
  const allocation = allocateSize(100 * 1024);
  //keep in memory so it is not garbage collected
  references.push(allocation);
  const usage = process.memoryUsage();
  console.log(usage);
}
