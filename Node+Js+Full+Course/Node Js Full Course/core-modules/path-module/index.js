import path from "path";
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const fullPath = path.join(__dirname, 'example', 'output.txt')

console.log("Full path:", fullPath)

const filePath = "/foo/bar/baz/asdf/index.png"

console.log("File Extensionn:", path.extname(filePath))

console.log("Basename: ", path.basename("/foo/bar/baz/asdf/index.html"))