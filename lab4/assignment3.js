db.country.insert( { _id:1, cities:['Bangalore','Hyderabad','Delhi'] } )
db.country.insert( { _id:2, cities:['Bangalore','Chennai','Kolkata'] } )
db.country.insert( { _id:3, cities:['Mumbai','Hyderabad','Delhi'] } )
db.country.insert( { _id:4, cities:['Mumbai','Hyderabad'] } )

db.country.find({_id:1},{cities:{$slice:3}})

db.country.find({_id:3})
db.country.find({_id:4})

db.country.update( { _id: 1 }, { $pop: {cities: -1 } } )
db.country.update({_id:2},{$push:{value:{Bangalore:80,Chennai:200,Kolkata:100}}})

db.country.update({_id:3},{$set:{'cities.3':'Srinagar'}})
db.country.update({_id:4},{$addToSet:{cities:"Trivandam"}})





