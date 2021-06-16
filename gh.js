var y=require('express')
var z=y()

z.get('/that',(req,res)=>{
    res.send("keep going")

})    
z.get('/there',(req,res)=>{
    res.send("believe in yoursef")

})
z.get('/do',(req,res)=>{
    res.send("page couldnt found")
})
z.listen(3000,()=>{
    console.log("server started at http://localhost:3000/")
})

