var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 8000;
var mongoose = require('mongoose');
var Student = require('./back-end/Student_Schema');
var bodyParser = require ("body-parser");

var router = express.Router();
var appRoutes =require('./back-end/api')(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(morgan('dev'));
app.use('/api',appRoutes);

mongoose.connect('mongodb://localhost:27017/Students',function(err){
	if (err)
	{
		console.log("!!");
	}
	else
	{
		console.log("Connected to MongoDB");
	}
});




/*app.post('/a',function(req,res){
	var stu = new Student();
	stu.StudentName = req.body.StudentName;
	stu.College = req.body.College;
	stu.EmailId = req.body.EmailId;
	stu.Contact = req.body.Contact;

	console.log("User created");


	stu.save(function(err){
		console.log("entered");
		if(err){
			res.send(err);
		}
		else{
			res.send("User created");
		}
	});
});*/

app.listen(port,function(){
	console.log("Server running on port"+port);
})
