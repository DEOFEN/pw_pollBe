const service = require('./services')

async function getAllPolls(req,res){
    try{
        let pollData = await service.getAllPolls();
        console.log("pollData", pollData)
         let response = {statusCode: 200,msg: "SUCCESS",data: pollData};

         res.type("json");
         return res.send(JSON.stringify(response));
    }catch(error){
        let errorData =  {statusCode: 400,msg: "ERROR",error: error};

        res.type("json");
         return res.send(JSON.stringify(errorData));
    }
}

async function addNewPoll(req,res){
    try{
        let dummyData = {
            question: "What is Your Favourite Color",
            options: [
                {
                    optionId     : 1, 
                    option      : "red", 
                    votes      : 0
                },
                {
                    optionId     : 2, 
                    option      : "blue", 
                    votes      : 0
                }
            ] 
          }
          
        let pollResponse = await service.addNewPoll(dummyData);
        console.log("pollResponse", pollResponse)
         let response =  {
             statusCode: 200,
             msg: "SUCCESS",
             data: {}
         };

         res.type("json");
         return res.send(JSON.stringify(response));
    }catch(error){
        let errorData =  {statusCode: 400,msg: "ERROR",error: error};

        res.type("json");
         return res.send(JSON.stringify(errorData));
    }
 }

 async function givePoll(req,res){
    try{
        req.body = {
            questionId: "asdfghjkl",
            OptionId
        }
        let dummyData = {
            question: "What is Your Favourite Color",
            options: [
                {
                    optionId     : 1, 
                    option      : "red", 
                    votes      : 0
                },
                {
                    optionId     : 2, 
                    option      : "blue", 
                    votes      : 0
                }
            ] 
          }
          
        let pollResponse = await service.addNewPoll(dummyData);
        console.log("pollResponse", pollResponse)
         let response =  {
             statusCode: 200,
             msg: "SUCCESS",
             data: {}
         };

         res.type("json");
         return res.send(JSON.stringify(response));
    }catch(error){
        let errorData =  {statusCode: 400,msg: "ERROR",error: error};

        res.type("json");
         return res.send(JSON.stringify(errorData));
    }

 }

module.exports = {
    getAllPolls,
    addNewPoll,
    givePoll
}