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
          
        let pollResponse = await service.addNewPoll(req.body);
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
        console.log("req.body", req.body)
        if(!req.body.optionIds){
            let errorData =  {statusCode: 400,msg: "ERROR",error: {err: "enter option"}};

           res.type("json");
           return res.send(JSON.stringify(errorData));
        }
       
        for(let i=0;i<req.body.optionIds.length;i++){
            let updateObj = {
                pollId: req.body.questionId,
                optionId: req.body.optionIds[i]
            }
            let pollResponse = await service.givePoll(updateObj);
            console.log("pollResponse", pollResponse)
        }

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