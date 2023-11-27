const {adminSignup,addDestination,getAllPackages, adminLogin,getSinglePage, addEnquirys, getEnquirys}=require('../Controllers/logic')
const express=require('express')
const upload = require('../middleware/multermiddleware')









const router=new express.Router()



//path for admin sign up
router.post('/tour/admin-signup',adminSignup)



//path for admin login
router.post('/tour/login',adminLogin)



//add destination

router.post('/tour/addDestination',upload.single("user_profile"),addDestination)

//get packages

router.get('/tour/getDestination',getAllPackages)


//for single page view 

router.get('/tour/destinationDescription/:id',getSinglePage)


// for enquiry form  in single page

router.post('/tour/addEnquirys',addEnquirys)

// for get equiry data
router.get('/tour/getEnquirys',getEnquirys)



module.exports=router