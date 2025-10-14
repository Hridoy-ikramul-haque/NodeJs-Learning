// Importing buffer

const buffer = Buffer.from("Hello world!", 'utf-8');
console.log(buffer)

console.log(buffer.toString())
console.log(buffer.length)

// Encoding buffer ("utf-8", "base64")
const bufferUtf8 = Buffer.from("Hello", 'utf-8')
console.log(bufferUtf8)

// converting buffer to base64
const bufferBase64 = bufferUtf8.toString('base64')
console.log(bufferBase64)

// decoding base64 back to original string

const decodedBuffer = Buffer.from(bufferBase64, 'base64')
console.log(decodedBuffer.toString('utf-8'))