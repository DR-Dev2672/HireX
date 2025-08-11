
const API_BASE_URL=import.meta.env.API_BASE_URL ||"";

export const register=async (formData)=>{
    console.log("api work")
    const response=await fetch(`http://localhost:3000/api/user/register`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify(formData),
    } )
    const responseBody = await response.json();
    
  
    if (!response.ok) {
      throw new Error(responseBody.message);
    }
    // console.log(response,"response in api")
    // return response.json();
}