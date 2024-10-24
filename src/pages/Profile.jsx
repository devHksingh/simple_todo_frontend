

import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Profile() {
   
    const navigate = useNavigate()
    const [data,setData] = useState({})
    const [todo,setTodo] = useState([])
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
                     setTodo(response.data.profile.todo)
                     console.log("res todo" ,response.data.profile.todo);
                     console.log("res todo" ,response.data.profile.todo);
                     
                     
                     
                } catch (error) {
                    console.log(error);
                    
                }
            }
            
        }
       
        apiCall()

    }, [])
    
    function logoutHandler(){
        localStorage.removeItem("token")
        navigate('/signIn')
    }
  return (
    <div className="container mx-auto font-serif">
        <div className="relative flex flex-col items-center justify-center p-4 mt-12 mb-4 border rounded-lg shadow-lg ">
            <h2>User Profile</h2>
            <p>Name:{`${data.name}`}</p>
            <p>Email:{`${data.email}`}</p>
            <p>Id:{`${data.id}`}</p>
            <p>UserName:{`${data.userName}`}</p>
            {/* <p>Todo : {`${data.todo.length}`}</p> */}
            <p>Total todo: {`${todo.length}`}</p>
            <button 
            className="absolute top-0 right-0 px-2 py-1 mt-2 mr-4 font-serif bg-orange-400 border rounded-lg shadow-md hover:bg-orange-600"
            onClick={logoutHandler}
            >Logout</button>
            
        </div>
        <div className="flex items-center justify-center gap-4 m-4 ">
            {
                todo.map((t)=>(
                    <article key={todo.index} className="inline-block p-4 border shadow-lg rounded-xl">
                        <h2>Title: {t.title}</h2>
                        <p>Body: {t.content}</p>
                        <p>todo id: {t.id}</p>
                        <p>createdAt: {new Date(t.createdAt).toLocaleTimeString()}</p>
                    </article>
                ))
            }
        </div>
        
    </div>
  )
}

export default Profile