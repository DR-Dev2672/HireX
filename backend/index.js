import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import "dotenv/config" ;
import userRoutes from './routes/user.Route.js';


const app=express();


app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTEND_URL,
    extended:true
}))
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
console.log("Database connected successfully");

app.get('/',(req,res)=>{
    res.status(200).json({message:"hello from server"});
})
app.use('/api/user',userRoutes);


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
