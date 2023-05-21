const express = require('express')
const app = express()

const port = 8081

const indexDirectory = '/'
const aboutDirectory = '/about'
const registerDirectory = '/register'
const parameterDirectory = '/parameter/:valueOne/:valueTwo'

const indexPath = '/pages/index.html'
const registerPath = '/pages/register.html'
const aboutPath = '/pages/about.html'

app.get(indexDirectory, (req, res) => indexPage(req, res))

app.get(aboutDirectory, (req, res) => aboutPage(req, res))

app.get(registerDirectory, (req, res)=>registerPage(req, res))

app.get(parameterDirectory, (req, res) => paramPage(req, res))

function indexPage(req, res){
	res.sendFile(__dirname + indexPath)
}

function aboutPage(req, res){
	res.sendFile(__dirname + aboutPath)
}

function registerPage(req, res){
	res.sendFile(__dirname + registerPath)
}

function paramPage(req, res){
	res.send(`<h2>${req.params.valueOne} and ${req.params.valueTwo} are cousins.</h2><br/>In the first degree.`)
}

//  *** WARNING ***
//This function must always be at the end of the file.
app.listen(port,function(){
	console.log(`Server Running on port ${port}`)
})

