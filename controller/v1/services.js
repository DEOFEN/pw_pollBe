const pollModel = require('../../models/polls')




function getAllPolls(){
    const allPolls = pollModel.find({});
    console.log("allPolls",allPolls.data)
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
      return true;
}

function givePoll(data){
    console.log("control", data)

    const book = pollModel.findOne({ "_id": data.pollId, 
    "options._id" : data.optionId });

    console.log("book", book)
    const item = pollModel.findOneAndUpdate({ "_id": data.pollId, 
    "options._id" : data.optionId },{$inc: { "options.$.votes": 1 }}, {new: true});
    console.log(item);
          return item

}

module.exports = {
    getAllPolls,
    addNewPoll,
    givePoll
}