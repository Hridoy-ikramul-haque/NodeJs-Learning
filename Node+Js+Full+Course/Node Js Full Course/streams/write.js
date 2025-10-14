import fs from 'fs';

const writeableStream = fs.createWriteStream('files/output.txt')

// writing data in chunks
writeableStream.write("This is the first chunk. \n")
writeableStream.write("This is the 2nd chunk. \n")
writeableStream.write("This is the 3rd chunk. \n")
writeableStream.write("This is the 4th chunk. \n")

writeableStream.end("This is the final chunk. \n")

writeableStream.on('finish', ()=> {
    console.log("Finished writing....")
})