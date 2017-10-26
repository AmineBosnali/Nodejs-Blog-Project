var mongoose=require('mongoose');

mongoose.Promise=require('bluebird');

var mongoDB='mongodb://localhost/NodeProje';

mongoose.connect(mongoDB,function(err,err){
    if(err){
        console.log('mongoose hatasi'+err);
    }
    else{
        console.log('mongoose baglandi'+mongoDB);
    }
});