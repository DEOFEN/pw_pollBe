const pollModel = require('../../models/polls')


const allPolls = pollModel.find({});

function getAllPolls(){
    console.log("all",allPolls)
    return allPolls;
}

function addNewPoll(data){
    console.log("control")
    var pollDetails = new pollModel(data);
      pollDetails.save(function(err,doc){
        if(err) return err;
        console.log("doc", doc)
         return doc;
      });

}

module.exports = {
    getAllPolls,
    addNewPoll
}