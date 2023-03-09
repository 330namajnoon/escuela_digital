
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const pdp = path.join(__dirname,"./public");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
app.use(express.static(pdp));
app.use(cors());
app.use(bodyParser.json());
const fs = require("fs");
const port = process.env.PORT || 4000;
const server = http.createServer(app,{cors:{origin:"*"}});

server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
})

app.post("/niveles",multer().none(),(req,res)=> {
    fs.readFile("./database/niveles.json",(err,data)=> {
        if(err) throw err;
        res.send(data.toString());
    })
})