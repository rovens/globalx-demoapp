var express=require('express');
var app=express();
app.use(express.static(__dirname + '/dist'));

var server=app.listen(3000,function(){
console.log("We have started our server on port 3000");
});