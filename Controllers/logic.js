const admins=require("../Models/admincollection")
const packages=require("../Models/collection")
const enquirys = require("../Models/enquiry")


//logic for admin signup
const adminSignup=async(req,res)=>{
    //destructure
    const{uname,email,psw,conpsw}=req.body
    //if fielld are empty or not
    if(!uname || !email || !psw || !conpsw){
        res.status(400).json("all fields are required")
    }else{
        // try{
            let preAdmin=await admins.findOne({email}) 
            if(preAdmin){
                res.status(400).json("already exist")
            }else{
                let newAdmin=new admins({uname,email,psw})
                if(psw==conpsw){
                    await newAdmin.save()
                    res.status(200).json(newAdmin)
                }else{
                    res.status(400).json("password are not matching")
                }
            }
            
        // }
        // catch{
        //     res.status(400).json("connection error")
        // }
        }

  



}    


const adminLogin=async(req,res)=>{
    const {email,psw}= req.body
    if(!email || !psw){
        res.status(400).json("all datas are required")
    }

    else{

        // try{
            const admin = await admins.findOne({email,psw})
            if(admin){
                res.status(200).json(admin)
            }
            else{
                res.status(404).json("incorrect email or psw")
            }
        // }
        // catch{
        //     res.status(400).json("connnection error")
        // }
    }



}













   // logic for add details 

      const addDestination= async(req,res)=>{
//console.log("sad",req)
        const profile=req.file.filename
        console.log(profile)
        const {destination,discription, price, days}=req.body

        let package={destination,discription, price, days,profile}
        await packages.create(package).then((result,error)=>{
            if(result  !="null"  && result  !=""){
                res.send(result)
            }
            else{

                res.send("error",error)
            }
        })



      }


      //logic for get data

      const getAllPackages=async(req,res)=>{
        try {
          const data = await packages.find();
          if (data) {
            res.status(200).json(data);
          } else {
            res.status(400).json("No data found");
          }
        } catch (error) {
          res.status(400).json("connection error", error);
        }
      }

    //logic for single view

    const getSinglePage=async(req,res)=>{
        try {
            
            const {id}=req.params
            const data=await packages.findById({_id:id})
            if(data){
                res.status(200).json(data)
            }else{
                res.status(400).json("No data found");
            }



        } catch (error) {
            res.status(400).json("connection error", error);
        }
    }
    

    //form for enquiry 

    const addEnquirys=async(req,res)=>{

        const{uname,email,phn}=req.body
        console.log({uname,email,phn});
        let enquiry={uname,email,phn}

        await enquirys.create(enquiry).then((result,error)=>{
            if(result  !="null"  && result  !=""){
                res.send(result)
            }
            else{
                res.send("error",error)
            }
        })
    }


    //for get enquirys

    const getEnquirys=async (req,res)=>{
        try {
            const list = await enquirys.find();
            if (list) {
              res.status(200).json(list);
            } else {
              res.status(400).json("No data found");
            }
          } catch (error) {
            res.status(400).json("connection error", error);
          }
    }







module.exports={adminSignup, addDestination, getAllPackages,adminLogin,getSinglePage,addEnquirys,getEnquirys}