const http = require("http");
const path = require("path");
const express = require("express");
const multer = require("multer");
const imageUpload = multer({storage:multer.diskStorage({
    destination:(req,file,cd)=> {
        cd(null,"./public/images")
    },
    filename:(req,file,cd) => {
        cd(null,file.originalname);
    }
})})
const fs = require("fs");
const port = process.env.PORT || 4000;
const pdp = path.join(__dirname,"./public");
const app = express();
app.use(express.static(pdp));
const server = http.createServer(app);
server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
})

app.post("/guardarDatos",imageUpload.single("image"),(req,res)=> {
    fs.readFile("./database/anuncios.json",(err,data)=> {
        if(err) throw err;
        let anuncios = JSON.parse(data.toString());
        let newanuncio = JSON.parse(req.body.anuncio);
        anuncios.push(newanuncio);
        console.log(anuncios)
        fs.writeFile("./database/anuncios.json",JSON.stringify(anuncios),(err)=> {
            res.send();
        })
    })
})
app.post("/descargar",(req,res)=> {
    fs.readFile("./database/anuncios.json",(err,data)=> {
        res.send(data.toString());
    })
})