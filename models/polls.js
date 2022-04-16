const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pollDb',{useNewUrlParser: true,  useUnifiedTopology: true });
var conn =mongoose.Collection;

var options = new mongoose.Schema({
    optionId     : Number, 
    option      : String, 
    votes      : Number
});

var pollSchema =new mongoose.Schema({
   question: {
      type:String,
      required:true,
      }, 
    options: [options]
});

var pollModel = mongoose.model('poll',pollSchema);
module.exports=pollModel;