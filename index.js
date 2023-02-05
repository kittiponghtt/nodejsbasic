const http = require('http')
const fs = require('fs')

const homepage = fs.readFileSync(`${__dirname}/templates/index.html`)
const productpage = fs.readFileSync(`${__dirname}/templates/product1.html`)
http.createServer((req,res)=>{
const pathName = req.url;
if(pathName==="/home" || pathName ==='/'){
    res.end(homepage)
}else if(pathName==='/product'){
    res.end(productpage)

}else{
    res.writeHead(404)
    res.end("Not found")
}

   
}).listen(3000,'localhost',()=>{
    console.log("start server in port 3000")
})