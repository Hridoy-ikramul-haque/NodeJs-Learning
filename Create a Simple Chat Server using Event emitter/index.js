import EventEmitter from 'node:events';

// global every object can listen each other event. 
const eventEmitter = new EventEmitter();


function CreateServer()
{
    function add(people)
    {
        console.log(`Adding ${people}`);
        eventEmitter.emit('addpeople',people)
    }

    function remove(people)
    {
        console.log(`Removing ${people}`);
        eventEmitter.emit('removePeople',people)
    }

    return{
        add,
        remove
    }
}



eventEmitter.on('addpeople',(people)=>{
    console.log(`${people} added to our queue....`);
        });

eventEmitter.on('removePeople',(people)=>{
            console.log(`${people} removed to our queue.....`);
        });

        



        const Server=CreateServer(); 
        Server.add('abir');
        Server.remove('ikramul');
