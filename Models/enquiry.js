const mongoose=require("mongoose")


//admin schema 

const enquirySchema=new mongoose.Schema({

     uname:{
             type:String,
             trim:true,
             required:true
     },
     email:{
             
        type:String,
        trim:true,
        required:true,
        unique:true

     },
     phn:{
        type:String,
        trim:true,
        required:true
     }




}
    )


    const enquirys =new mongoose.model('enquirys',enquirySchema)
    module.exports=enquirys