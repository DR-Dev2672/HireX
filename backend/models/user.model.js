import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","recruiter"],
        required:true,

    },
    profile:{
        bio:String,
        skills:[String],
        resume:String,
        resumeOriginalName:String,
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Company"
        },
        profilePhoto:{
            type:String,
            default:"",
        }

    }



},{
    timestamps:true
});


