db.Employee.insert(
	{
           _id:1,
	    First_Name: "Radhika",
	     Last_Name: "Sharma",
	     Age: "40",
	     e_mail: "radhika_sharma.123@gmail.com",
	     phone: "9848022338"
	})
db.Employee.insert(
	{    _id:2,
            First_Name: "Rachel",
	    Last_Name: "Christopher",
	    Age: "36",
	    e_mail: "Rachel_Christopher.123@gmail.com",
	    phone: "9000054321"
	})
db.Employee.save(
	{   _id:3,
            First_Name: "Battula",
	    Last_Name: "Pragati",
	    Age: "20",
	    e_mail: "pragati.123@gmail.com",
	    phone: "9000054321"
		
	})
db.Department.insert(
	{
     _id:1,
		Name: "CSE",
		e_mail: "cse@gmail.com",
		HOD: "Ravi Kumar"
	}),
db.Department.insert(
	{ _id:2,
		Name: "ECE",
		e_mail: "ece@gmail.com",
		HOD: "Paul"
	}),
db.Department.save(
	{  _id:3,
    Name: "EEE",
		e_mail: "eee@gmail.com",
		HOD: "Vinod"
		
	}),
db.Department.save(
	{   _id:5,
      Name: "Mechanical",
			e_mail: "mce@gmail.com",
			HOD: "preeti"
		
	})
  
db.Department.update(
	{  _id:5,
		Name: "Mechanical",
		e_mail: "mce@gmail.com",
		HOD: "praveen"
	},{upsert:true})
  
db.Department.update(
	{  _id:5,
		Name: "Mechanical",
		e_mail: "mce@gmail.com",
		HOD: "praveen K"	
	},{upsert:false})
        
db.Department.save(
	{    _id:4,
      Name: "Aerospace",
			e_mail: "aero@gmail.com",
			HOD: "Vishal"
		
	})
        
db.Department.remove({"Name":"ECE"})
db.Department.find()
db.Employee.find()

db.Department.find({_id:{$gt:1,$lt:5}})

db.Employee.find({First_Name:/^R/})
db.Employee.find({Age:{$gt:"30"}})
        
db.Employee.update({_id:1 },{ $set: { "Age": "42" }}) 