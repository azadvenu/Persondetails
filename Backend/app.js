const express =require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const personModel = require('./model/persons')


const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

mongoose.connect('mongodb+srv://azadvenu812:MongoAtlasDb812@cluster0.2cabyqj.mongodb.net/BootcampDB?retryWrites=true&w=majority',{useNewUrlParser:true})

app.post('/api/personentry',async(req,res)=>{
    try {
        let data = req.body
        const person = new personModel(data)
        const savedPerson = await person.save()
        res.json({"status":"success", savedPerson})
        console.log('data from front end/postman: ',savedPerson)
    } catch (error) {
       console.log(error) 
    }
   
})

app.post('/api/personview',async(req,res)=>{
   try {
    const personview = await personModel.find()
    res.json(personview)
    console.log(personview)
   } catch (error) {
    res.json({"status":"error"})
    console.log(error)
   }
})

app.post('/api/personupdate',async(req,res)=>{
    try {
        let data= req.body
        const personUpdate = await personModel.findOneAndUpdate({"_id":req.body._id},data)
        res.json({"status":"updated",personUpdate})  
        console.log(personUpdate)
    } catch (error) {
      console.log(error)  
    }
   

})

app.post('/api/personsearch',async(req,res)=>{
    try {
        const personSearch=await personModel.find({"jerseyno":req.body.jerseyno})
        res.json(personSearch)
        // console.log(personSearch)
    } catch (error) {
        res.json({"status":"error"})
       console.log(error) 
       r
    }
  
})

app.delete('/api/persondelete',async(req,res)=>{
    try {
      
       deleteperson = await personModel.findOneAndDelete({"name":req.body.name})
       res.json({"status":"deleted"})
    } catch (error) {
       console.log(error)
    }
})


app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})