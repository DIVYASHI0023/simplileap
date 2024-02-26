const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require("mongoose");
require('dotenv').config()
const { DB_URL } = require('./configs/dburl');
const { PORT } = require('./configs/port');
const app = express()
app.use(bodyParser.json());
app.use(cors());



mongoose.connect(DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the database",err);


})
 


require("./Routes/app.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8000`);
});
