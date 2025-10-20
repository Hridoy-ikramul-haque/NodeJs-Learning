import { Transform } from 'stream';

// create a transform stream
const transtream= new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe((transtream)).pipe(process.stdout);

