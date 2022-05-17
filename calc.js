const express = require("express");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html" );
});


app.post("/", function(req, res){
   var num1 = Number(req.body.Num1);
   var num2 = Number(req.body.Num2);
  var operate = req.body.Operator;

   if (operate === "+") {
       var result = num1 + num2;
   }

    if (operate === "-") {
    var result = num1 - num2;
}
    if (operate === "*") {
       var result = num1 * num2;
   }
   if (operate === "/") {
    var result = num1 / num2;
}
 if (operate === "%") {
    var result = num1 % num2;
}
else ("Not a valid operator");


     
    res.send("The result of the calculation is " + result)
})

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
} );