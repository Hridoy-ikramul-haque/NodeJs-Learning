import path from 'path'; 
import {fileURLToPath} from 'url';
// console.log(path);

//find this file path
const filename=fileURLToPath(import.meta.url);
console.log(filename);
const dirName=path.dirname(filename); 

//join a pathmodule 
const newPath= path.join(dirName,'abirzeba','notes.txxt'); 
console.log(newPath);
console.log(dirName);
const baseName=path.basename(filename);
console.log(baseName);

// find extension 
console.log(path.extname(newPath));
console.log(path.extname(filename));