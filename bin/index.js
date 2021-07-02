#!/usr/bin/env node

const os = require('os');

function main() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();

  const memoryBeingUsed = calculateMemoryBeingUsed(totalMemory, freeMemory);
  displayMemoryBeingUsed(memoryBeingUsed);
}

function calculateMemoryBeingUsed(totalMemory, freeMemory) {
  return (((totalMemory - freeMemory) / 1024)/ 1024)/ 1024;
}

function displayMemoryBeingUsed(memoryBeingUsed) {
  console.log(`${memoryBeingUsed.toFixed(2)} GB`);
}

setInterval(main, 1000);