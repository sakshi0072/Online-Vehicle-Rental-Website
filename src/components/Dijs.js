
// const b1 = document.getElementById("b1")
// const b2 = document.getElementById("b2")
// const b3 = document.getElementById("b3")
// const b4 = document.getElementById("b4")
// document.getElementsByClassName("personal-info").this.style.display="none";
// console.log(b1)
// b1.style.display='none'
// import {MongoClient} from 'mongodb';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Harshit:2407@cluster0.zxydqh4.mongodb.net/?retryWrites=true&w=majority";
var Res;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Demo");
  dbo.collection("demo").find({}).toArray(function(err, result) {
    if (err) throw err;
    Res = result;
    console.log(Res);
    db.close();
  });
});


// export default Res;