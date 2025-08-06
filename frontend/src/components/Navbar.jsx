import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from 'lucide-react';
import { User } from 'lucide-react';

function Navbar() {
  return (
    <>
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-20 ">
        <div>
          <h1 className="text-2xl font-bold ">
            JOB<span className="text-red-600">Spa</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center font-medium gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outline"
                className="bg-blue-600 hover:bg-blue-500 text-white"
              >
                Register
              </Button>
            </Link>
          </div>
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="flex flex-col gap-2 ">
                
                <div className="flex items-center cursor-pointer">
                  <User />
                  <Link to="Profile">
                    <Button
                      variant="link"
                      className=""
                    >
                      View Profile
                    </Button>
                  </Link>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut />
                  
                    <Button
                      variant="link"
                      className=""
                    >
                      Logout
                    </Button>
            
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
