const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors({ 
    origin: "http://localhost:3000", 
    methods:["GET", "POST", "PUT", "DELETE"],
 }));

 app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });