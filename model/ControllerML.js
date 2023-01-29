
import spawn1 from 'child_process';

export const predict1 = async (req, res, next)=> {
    try{                
        console.log("before spawn ")

        var dataToSend;
        // spawn new child process to call the python script
        const python = await spawn1.spawn('python', ['script1.py',34,12,5940.83050148322]);
        // collect data from script
        python.stdout.on('data', function (data) {
         console.log('Pipe data from python script ...');
         dataToSend = data.toString();
         console.log(dataToSend,"inside nodejs")
        });

        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            // send data to browser
            // res.send(dataToSend)
            res.status(200).send({"data":dataToSend,"message":"Congrats in ML!"})  
            });
           



    }catch(err){
        console.log("we in controller error",err)

        

    }


}


export const predict2 = async (req, res, next)=> {
    try{                
        // console.log("before spawn ",req.body.arg1)

        var dataToSend;
        // spawn new child process to call the python script
        const python = await spawn1.spawn('python', ['script1.py',req.body.Quantity,req.body.Volume,req.body.source,req.body.destination]);
        // collect data from script
        python.stdout.on('data', function (data) {
         console.log('Pipe data from python script ...');
         dataToSend = data.toString();
         console.log(dataToSend,"inside nodejs")
        });

        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            // send data to browser
            // res.send(dataToSend)
            res.status(200).send({"predicteddata":dataToSend,"message":"Predicted Price!"})  
            });
           



    }catch(err){
        console.log("we in controller error",err)

        

    }


}

