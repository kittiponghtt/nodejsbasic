const express = require("express")
const router = express.Router()
const path = require('path')


//อ้างอิงตำแหน่งไฟล์
const indexPage = path.join(__dirname,"../templates/index.html")
const productPage1 = path.join(__dirname,"../templates/product1.html")
const productPage2 = path.join(__dirname,"../templates/product2.html")
const productPage3 = path.join(__dirname,"../templates/product3.html")

router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

router.get("/product/:id",(req,res)=>{
    
    //res.sendFile(productPage1)
    const productID = req.params.id 
    if(productID==="1"){
        res.status(200)
        res.sendFile(productPage1)
    }else if(productID==="2"){
        res.status(200)
        res.sendFile(productPage1)
    }else if(productID==="3"){
        res.status(200)
        res.sendFile(productPage1)
    }else{
        res.redirect("/")
    }
   
})

module.exports = router