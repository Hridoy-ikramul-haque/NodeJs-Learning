import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

function CreateServer(s_name)
{
    //add people
    function add(people)
    {
        console.log(`${s_name} added ${people}`);
        eventEmitter.emit('addpeople',people);
    }

    //remove people 
    function remove(people)
    {
        console.log(`${s_name} removed ${people}`);
        eventEmitter.emit('removepeople',people);
    }

    return {add,remove};
};

eventEmitter.on('addpeople',(people)=>{
    console.log(` server1 ${people} added succesfully..........`);
}); 

eventEmitter.on('removepeople',(people)=>{
    console.log(`server1 ${people} removed succesfully..........`);
}); 


eventEmitter.on('addpeople',(people)=>{
    console.log(`server2 ${people} added succesfully..........`);
}); 

eventEmitter.on('removepeople',(people)=>{
    console.log(`server2 ${people} removed succesfully..........`);
}); 

const server1= CreateServer('server1');
const server2= CreateServer('server2');

server1.add('abir');
// server2.add('ikramul');
