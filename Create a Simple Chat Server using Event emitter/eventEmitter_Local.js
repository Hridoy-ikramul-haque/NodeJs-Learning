import EventEmitter from 'node:events';


function CreateServer(namne)
{
    //local 
    const eventEmitter = new EventEmitter();

    function add(people)
    {
        console.log(`${people} adding....`);
        eventEmitter.emit('adds',people);
    }

    function remove(people)
    {
        console.log(`${people} removing.....`);
        eventEmitter.emit('removes',people);
    }

    return{
        add,
        remove,
        on: eventEmitter.on.bind(eventEmitter)
    }
}

const server1=CreateServer('server1');
const server2=CreateServer('server2');

server1.on('adds',(people)=>{
    console.log(`${people} added by server1`);
})
server2.on('adds',(people)=>{
    console.log(`${people} added by server2`);
})


server1.on('removes',(people)=>{
    console.log(`${people} removes by server1`);
})
server2.on('removes',(people)=>{
    console.log(`${people} removes by server2`);
})



server1.add('abirr');
server1.add('ikramul');

server2.add('moshiur');
server2.add('abul');


server1.remove('abirr');
server1.remove('ikramul');

server2.remove('moshiur');
server2.remove('abul');