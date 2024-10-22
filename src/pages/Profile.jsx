

import axios from "axios"
import { useEffect, useState } from "react"

function Profile() {
   
    
    const [data,setData] = useState({})
    useEffect(()=>{
        async function apiCall(){
            const token = localStorage.getItem("token")
            if(token){
                try {
                    const response = await axios.get('/api/users/userProfile',{
                        headers:{
                            'Authorization':`Bearer ${token}`
                        }
                    })
                     if(response){
                        console.log("apiData" ,response);
                    //  setData(response.data)
                    //  console.log(data);
                     console.log("apiData",response);
                     console.log("RES .DATA" ,response.data);
                     console.log("RES .DATA PROFILE" ,response.data.profile);
                     setData(response.data.profile)
                     console.log("DATA #####" ,data);
                     }
                     
                     
                } catch (error) {
                    console.log(error);
                    
                }
            }
            
        }
       
        apiCall()
        
        
        
    }, [])
    
    
  return (
    <div>Profile</div>
  )
}

export default Profile