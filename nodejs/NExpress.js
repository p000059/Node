const express = require("express");
const app = express();

app.get('/', function(req,res){
	res.sendFile(__dirname + '/html/index.html')
});

app.get('/about', function(req,res){
	res.sendFile(__dirname + '/html/About.html')
});

app.get('/blog', function(req,res){
	res.send('Pagina de uso do blog');
});

app.get('/em/:brand/:model/:year/:color', function(req,res){
	res.send(req.params);
});

app.get('/form/:brand/:model/:year/:color', function(req,res){
	res.send('<br/>Marca: ' + req.params.brand + '<br/>Modelo: ' + req.params.model + '<br/>Ano: ' + req.params.year + '<br/>Cor: ' + req.params.color);
});

app.listen(8081, function(){console.log("Servidor Rodando");});