mongoimport -d test -c MongoDBHandsOn --type csv --headerline --file C:\Users\Pragati\Desktop\bank.csv

use test

db.getCollection('MongoDBHandsOn').find({})
db.MongoDBHandsOn.aggregate([
    {
        $group : {
            _id : "summary",
            childrenTotal : { $sum : "$children"},
            average : {$avg : "$children"}
        }
    }
])