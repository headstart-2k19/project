var User = require('./Student_Schema');

module.exports= function(router){
	router.post('/a',function(req,res){
	var user = new User();
	user.StudentName = req.body.StudentName;
	user.College = req.body.College;
	user.EmailId = req.body.EmailId;
	user.Contact = req.body.Contact;

	if (user.StudentName==""||user.StudentName==null||user.College==""||user.College==null||user.EmailId==""||user.EmailId==null||user.Contact==""||user.Contact==null)
	{
		res.send("UserName, College,Email-Id or Contact are missing and are required to proceed");
	}
	else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.EmailId)){
	user.save(function(err){
		if(err){
			res.send("User already exists!!");
		}
		else{
			res.send("User created");
		}
	});
}
else {
	res.send("Invalid Email");
}
});
	return router;
}
