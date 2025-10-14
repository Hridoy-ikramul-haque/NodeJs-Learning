import fs from "fs";

// read image file and embaded image into html file

fs.readFile("images/cute-dog-2.jpg", (err, data) => {
  if (err) {
    console.log("Error reading the image file:", err);
    return;
  }

  // conver the data to base64
  const base64Image = data.toString("base64");

  // data:[MIME type];[ecoding], [data]
  const imgSrc = `data:image/jpeg;base64,${base64Image}`;
//   console.log(imgSrc);

  // create a html file content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Embaded Image into HTML File</title>
            <style>
            body{
            font-family: Arial,sans-serif;
            text-align: center;
            margin: 50px
            } 
            
            img{
            width: 300px;
            border: 2px solid #000;
            border-radius: 10px;
            }

            </style>
        </head>
        <body>
            <h1>Image Embaded in HTML</h1>
            <img src="${imgSrc}" alt="Cute Dog">
        </body>
    </html>
    `;


    // create a html file using fs module
    fs.writeFile("index.html", htmlContent, (err) => {
        if(err) {
            console.log("Error writing a html file", err)
        }

        console.log("HTML File with Embaded Image saved successfully done!")
    })
});
