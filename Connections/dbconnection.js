const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("_______mongodb atlas connected_____");
}).catch((error)=>{
    console.log("connection error",error);
})