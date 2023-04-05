const mongoose=require('mongoose')

const personSchema = mongoose.Schema(
{
    name: {
        type: String,
       required: true
},
  
    jerseyno:{
        type: Number,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    place:{
        type:String,
        required:true
    }
    
}
)

var personModel = mongoose.model('persons',personSchema)

module.exports= personModel