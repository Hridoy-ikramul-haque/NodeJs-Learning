import os from 'os';

console.log("CPU architecture:", os.arch())

console.log("ogical CPU core: ", os.cpus())

console.log("System Memory(RAM): ", os.totalmem()/(1024 * 1024 * 1024), "GB")