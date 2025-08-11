import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [role, setRole] = useState("Student");
  const changeEventHandler = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };
  return (
    <form className="border-4 rounded-xl">
      <div className="container w-1/3 mx-auto py-10 flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Login</h1>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Username/Email
          <input className="rounded border px-2 py-1 w-full font-normal" />
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input className="rounded border px-2 py-1 w-full font-normal" />
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
          className="w-full  bg-blue-600 my-4  text-white hover:bg-blue-500 hover:text-white "
          type="submit"
        >
          Register
        </Button>
      </div>
    </form>
  );
};

export default Login;
