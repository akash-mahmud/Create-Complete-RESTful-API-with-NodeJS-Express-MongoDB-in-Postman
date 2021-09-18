const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project")
.then(() =>{
  console.log("Database Connection Succcessful");
}).catch((e) => {
   console.log("No connection");
})