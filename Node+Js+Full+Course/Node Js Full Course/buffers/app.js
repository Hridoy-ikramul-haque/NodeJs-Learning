// File encoding and decoding project

import fs from 'fs';

// read the file and encode it

fs.readFile("files/example.txt", (err, data) => {
    if (err) throw err;

    // encoding file
    const encodedData = data.toString('base64');

    console.log("Encoded Data: \n", encodedData)

    // optional task: save the encoded data to new file
    fs.writeFile("files/output.txt", encodedData, (err) => {
        console.log("Error")
    })


    // decoding file
    const decodedData = Buffer.from(encodedData, 'base64').toString('utf-8')
    console.log("Decoded Data: \n", decodedData)
})