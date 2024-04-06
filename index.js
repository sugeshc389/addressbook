import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
// app.use('/api/users')

mongoose.connect(process.env.MONGODB).then(
    console.log('DB Connected')
).catch(e =>{
    console.log(e)
})

app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", process.env.PORT);
})