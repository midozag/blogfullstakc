import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose'
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
   .then(()=>{console.log("connected")})
   .catch(err=>console.log(err))
app.listen('3000',console.log("hii"))


