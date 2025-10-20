import { Duplex } from 'stream'

//create duplexstream
const duplexstream=new Duplex({
    write(chunk,utf,callback){
        console.log(`Writting: ${chunk}`);
        callback();
    },

    read(){
        this.push("Hello from duplex");
        this.push("Abir bro");
        this.push(null);
    }
});
 

// apply read method

duplexstream.on('data',(chunk)=>{
    console.log(`Reading: ${chunk}`);
})

// apply write method
duplexstream.write("This is a test writting"); 
duplexstream.write("write abir"); 
duplexstream.end(); 