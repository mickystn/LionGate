const express = require("express");
const app = express();
const cors = require("cors");

const routerUser = require("./routes/routeUser")
const routerAnimal = require("./routes/routeAnimal")
const verify = require('./config/verify')

app.use('/photos',express.static('photos'));
app.use(express.json());
app.use(cors());

app.use('/User',verify,routerUser)
app.use('/Animal',verify,routerAnimal)
app.listen(3001,()=>{
    console.log("Server running on port 3001");
})