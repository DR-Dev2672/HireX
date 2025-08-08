
import axios from 'axios'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
  const [role, setRole] = useState("Student");
  

  const { register, handleSubmit } = useForm();
  const changeEventHandler = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };

  const navigate=useNavigate();
  const onSubmit = handleSubmit( async (data) => {
    
    try {
      console.log(data)
      const res=await fetch("http://localhost:3000/api/user/register",
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json",

          },
          credentials:"include",
          body: JSON.stringify(data),
        }
        
      );

      const body= await res.json();
      console.log(res)
      if(res.ok){
        toast("Registration Successful! Please Login to continue.");
        // navigate("/login")
      }
      return body;
      
    } catch (error) {
     
      console.log("Error in registration",error);
      toast.error(error.res.data.message)
      
    }

  });

  return (
    <>
      <Navbar />
      

      {/* <div className=" flex justify-items-center container bg-red-300   py-10 justify-center full "> */}
        <form
          className=" border-4 rounded-xl   "
          onSubmit={onSubmit}
        >
          <div className="container w-1/2 mx-auto py-10 flex flex-col gap-5">
          <h2 className="text-3xl font-bold ">Create an Account</h2>

          <label className="text-gray-700 text-sm font-bold flex-1">
            Full Name
            <input
              {...register("fullName")}
              className="rounded border px-2 py-1 w-full font-normal"
            />
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Email
            <input
              {...register("email")}
              className="rounded border px-2 py-1 w-full font-normal"
            />
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Password
            <input
              {...register("password")}
              className="rounded border px-2 py-1 w-full font-normal"
            />
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Phone Number
            <input
              {...register("phoneNumber")}
              className="rounded border px-2 py-1 w-full font-normal"
            />
          </label>

          <div className="flex flex-row ">
            <label className="text-gray-700 text-sm font-bold flex-1">
              <input
                type="radio"
                name="role"
                value="student"
                onChange={changeEventHandler}
                checked={role === "student"}
              />
              Student
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
              <input
                type="radio"
                value="recruiter"
                name="role"
                onChange={changeEventHandler}
                checked={role === "recruiter"}
              />
              Recruiter
            </label>
          </div>
          <Button
            variant="outline"
            className="w-full bg-blue-600 my-4  text-white hover:bg-blue-500 hover:text-white "
            type="submit"
          >
            Register
          </Button>
          </div>
        </form>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Register;
