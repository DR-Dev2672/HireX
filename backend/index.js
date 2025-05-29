import express, { urlencoded } from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import "dotenv/config" ;


const app=express();


app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTENT_URL,
    extended:true
}))
mongoose.connect(process.env.MONGODB_CONNECTION_STRING )
console.log("Database connected successfully");

app.get('/',(req,res)=>{
    res.status(200).json({message:"hello from server"});
})


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
