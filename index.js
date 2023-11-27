const express=require('express')
require('dotenv').config()
const cors=require('cors')
const router=require('./Routes/routes')





const server=express()
server.use(express.json())
server.use(cors())
server.use(router)
server.use('/tourimage',express.static('./uploads'))

require('./Connections/dbconnection')
const port =8500 || process.env.port
server.listen(port,()=>{
    console.log(`server running at port no${port}`);
})