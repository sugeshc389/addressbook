import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import userRouter from './routes/userRoutes.js'

const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use('/api',userRouter);


mongoose.connect(process.env.MONGODB).then(
    console.log('DB Connected')
).catch(e =>{
    console.log(e)
})

app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", process.env.PORT);
})