const mongoose=require("mongoose")


//admin schema 

const adminSchema=new mongoose.Schema({

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
     psw:{
        type:String,
        trim:true,
        required:true
     },

     isAdmin:{

        type:Boolean,
        default:true,
        
     }




}
    )


    const admins =new mongoose.model('admins',adminSchema)
    module.exports=admins