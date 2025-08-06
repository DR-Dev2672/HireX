import  jwt  from "jsonwebtoken";



const isAuthenticated=async(req,res,next)=>{
  try {
    const token=req.cookies["token"];
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access, please login first.",
            success:false
        })
    }
    const decoded=await jwt.verify(token,process.env.SECRET_KEY)
    console.log(decoded);
    if(!decoded){
        return res.status(401).json({
            message:"Unauthorized access, please login first.",
            success:false
        })
    }
    
    req.id=decoded.userId;
    next();

  } catch (error) {
     throw new Error("Authentication failed",error);
  }
}
export default isAuthenticated;