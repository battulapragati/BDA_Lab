db.books.save({_id:1, Category: "Machine Learning", Bookname:"ML", Author:"Abc", qty:25,price:400,rol:30,pages:350});
db.books.save({_id:2, Category: "BI", Bookname:"BI Book", Author:"Def", qty:25,price:400,rol:11,pages:200});
db.books.save({_id:3, Category: "Analytics", Bookname:"Anaytics Basics", Author:"Hij", qty:8,price:500,rol:30,pages:150});
db.books.save({_id:4, Category: "Visualisation", Bookname:"Visualisation Basics", Author:"Pqr", qty:12,price:325,rol:6,pages:500});
db.books.save({_id:5, Category: "Visualisation", Bookname:"Visualisation Basics", Author:"Xyz", qty:12,price:325,rol:6,pages:900});

db.books.find().pretty()

var map = function(){
    var category;
    if(this.pages>=300)
        category = "Big books"
    else
        category = "Small Books"
    emit(category, {
        Bookname : this.Bookname});
}
var reduce = function(key, values){
   return values.length    
};

db.books.mapReduce(map, reduce, {out: "Bookcategory"})
db.Bookcategory.find()