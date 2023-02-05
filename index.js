const http = require('http')
const fs = require('fs')
const url = require('url')

const homepage = fs.readFileSync(`${__dirname}/templates/index.html`)
const productpage1 = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')
const productpage2 = fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8')
const productpage3 = fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8')
http.createServer((req,res)=>{
    const {pathname,query} = (url.parse(req.url,true))
   
    if(pathname==="/home" || pathname ==='/'){
        res.end(homepage)
    }else if(pathname==='/product'){
        if(query.id==="1"){
            res.end(productpage1)
        }else if(query.id==="2"){
            res.end(productpage2)
        }else{
            res.end(productpage3)
        }
       

    }else{
        res.writeHead(404)
        res.end("Not found")
    }

   
}).listen(3000,'localhost',()=>{
    console.log("start server in port 3000")
})