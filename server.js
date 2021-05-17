const express = require("express"); //Importing the express module

const bodyParser = require("body-parser"); //Importing the body-parser module

const app = express(); // Creating a constant to call the express function

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){ //Telling the server to keep listening to this port
    console.log("Server has started on port 3000"); // Message to be displayed on the terminal whenever you start the server
});

app.get("/", function(req, res){  //What's to be shown in the root/home page
    res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    res.send("The answer is: " + result);
});



