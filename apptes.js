var express = require('express')

var app = new express()

var path = require('path')

app.engine('html',require('express-art-template'))

app.use('/public/',express.static(path.join(__dirname,'/public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'/node_modules/')))



app.get('/',function(req,res){
	res.render('index.html',{
		name:'小明'
	})
})

app.listen(3000,function(){
	console.log("server is running")
})