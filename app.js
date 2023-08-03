const jsw = require("jsonwebtoken")
const express = require("express")
const app = express()
const dataModel = require("./Model")
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('/public'))


// for getting the interface
app.get('/newCustomer',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
    console.log("file send successfully")
})

//for adding the customer to the database
app.post('/newCustomer',(req,res)=>{
    //after console.log we can get all the data that customer want to send to the database
    console.log(req.body);
    res.send("response submitted successfully");
})

//for getting the table interface
app.get("/table",(req,res)=>{
    res.sendFile(__dirname + "/public/table.html",)
})

// for gettting the login page
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/public/login.html")
})

//for creating the token when accout is crated
app.post('/login',(req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        res.status(400).send({msg:"Enter valid password or username"})
    }
    var id = new Date().getDate();
    let token = jsw.sign({username,id},"secretkey",{expiresIn:"30d"})
    res.send({msg:"Account created successfully",token})
})

// for the updating the data in the database
app.put("/edit",(req,res)=>{
    const task = dataModel.updateOne({first_name:"pratik",
                                    last_name:"Kapratwar"})
})

app.delete("/delete",(req,res)=>{
    const task = dataModel.delete({first_name:"pratik",
    last_name:"Kapratwar"
})})
app.listen(5000,console.log("Server is listening on the port 5000"))