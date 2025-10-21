
//encoding and decoding buffer

let raw_data="i love coding"; 
//utf8 encoding
const encodeutf8=Buffer.from(raw_data,'utf-8');
console.log(encodeutf8);

//base64 encoding
const encodebase64=encodeutf8.toString('base64');
console.log(encodebase64);

//decoding

const decodebuffer=Buffer.from(encodebase64,'base64');
console.log(decodebuffer);
console.log(decodebuffer.toString('utf-8'));