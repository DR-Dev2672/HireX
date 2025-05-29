import mongoose from "mongoose";
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true

    },
    position:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    requirements:[
        {
            type:String,
            
        }
    ],
    jobType:{
        type:String,
        enum:["Full-time", "Part-time", "Contract", "Internship"],
        required:true
    },
    experienceLevel:{
        type:String,
        enum:["Entry-level", "Mid-level", "Senior-level"],
        required:true
    },
    applications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Application"
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
    



},{
    timestamps:true
})

export const Job=mongoose.model("Job",JobSchema);