var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("Express Module route");
});

app.get("/about", function(req,res){
	res.send("Pagina sobre uso de rotas no Express");
});

app.get("/blog", function(req,res){
	res.send("Pagina de uso do blog");
});

app.listen(8081, function(){
	console.log("Express Module");
});
