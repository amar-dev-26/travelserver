const mongoose=require('mongoose')

const packagesScema=new mongoose.Schema({



    destination:{


       type:String,
       
       trim:true,
       required:true


    },
    discription:{


       type:String,
       
       trim:true,
       required:true


    },


    price:{


       type:String,
       required:true,
       trim:true,
       required:true


    },

   days:{

       type:String,
       unique:true,
       trim:true,
       required:true
   },
   profile:{
    type:String,
    required:true,
    trim:true}





   
})

const packages=new mongoose.model('packages',packagesScema)

module.exports=packages