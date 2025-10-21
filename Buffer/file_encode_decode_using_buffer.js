import fs from "fs/promises";
import { buffer } from "stream/consumers";

async function processFile() {
  try {
    const data = await fs.readFile("notes.txt");
    const encoded = data.toString("base64");
    await fs.writeFile("notes_encode64.txt", encoded);
    console.log("file wrritten by base64 mode");

    const encodedata = await fs.readFile("notes_encode64.txt");
    const decodedata = Buffer.from(encodedata.toString(),"base64").toString("utf-8");
    await fs.writeFile("file_decode.txt", decodedata);
    console.log("file decode done");
  } catch (error) {
    console.log(error);
  }
}

processFile();
