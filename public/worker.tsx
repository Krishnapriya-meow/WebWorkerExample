

self.onmessage = (oEvent) => {
  console.log('Worker invoked')
  let count = 0;
  for (let i = 0; i < 5000000000 * 2; i++) {
    count += 1;
  }
  self.postMessage(count)
  return count
  
};
