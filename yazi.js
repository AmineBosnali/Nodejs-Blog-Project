
var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var yaziSchema=new Schema({
    baslik:String,
    metin:String,
    gorsel:String,
    tarih:Date
}, {collection:'yazilar'});


var Yazi=mongoose.model('Yazi',yaziSchema);

module.exports=Yazi;
