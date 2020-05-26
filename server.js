// npm init -y
// npm start
// npm install express
// npm install -D nodemon 
// -D significa para colocar em dependencia de desenvolvimento
// faz reiniciar o servidor automaticamente, mudado no package.json
// npm install nunjucks template engine

const express = require ('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

server.get("/", function(req,res){
    return res.render("index")
    // return res.send("Hi!!!")
})

server.listen(5000, function(){
    console.log("server is running")
})