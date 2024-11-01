import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import profileImg from '../assets/vecteezy_a-silhouette-of-a-man-in-a-suit-and-tie_49579807.png'

function Profile() {
   
    const navigate = useNavigate()
    const [data,setData] = useState({})
    const [todo,setTodo] = useState([])
    

    function  truncateString(inputStr,wordLimit){
        const words = inputStr.split(' ');
        // If the number of words is less than or equal to the limit, return the original string
        if(words.length <= wordLimit){
            console.log("inputStr :",inputStr);
            
            return inputStr
        }
        // Join only the words within the limit and add "..."
        const truncated = words.slice(0,wordLimit).join(' ')+'...'
        console.log("truncated :",truncated);
        
        return truncated 
    }
    
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
                        // console.log("apiData" ,response);
                    //  setData(response.data)
                    //  console.log(data);
                    //  console.log("apiData",response);
                    //  console.log("RES .DATA" ,response.data);
                    //  console.log("RES .DATA PROFILE" ,response.data.profile);
                     setData(response.data.profile)
                    //  console.log("DATA #####" ,data);
                     }
                     setTodo(response.data.profile.todo)
                    //  console.log("res todo" ,response.data.profile.todo);

                    
                     
                     
                     
                } catch (error) {
                    console.log(error);
                    
                }
            }
            
        }
       
        apiCall()
        

    }, [])

    function editHandler(id){
        console.log(id)
    }
    function removeHandler(id){
        console.log(id)
    }
    
    function logoutHandler(){
        localStorage.removeItem("token")
        navigate('/signIn')
    }
    function addTodoHandeler(){
        navigate('/addtodo')
    }
  return (
    <div className="container mx-auto ">
        
        <div className="w-full max-w-sm mx-auto my-8 border rounded-lg shadow-lg bg-inherit">

            <div className="flex flex-col items-center px-4 pt-4 pb-10">
                
                    <img className="w-24 h-24 mb-3 bg-white border border-none rounded-full shadow-lg" src={profileImg} alt="Bonnie image"/>
                
                <h5 className="mb-1 text-xl font-medium text-gray-900 y-50 text-inherit">{`${data.name}`}</h5>
                
                <div className="grid items-center justify-center grid-cols-2">
                    <span className="text-sm text-gray-500 opacity-50 text-inherit">Id: <span className="text-inherit">{`${data.id}`}</span></span>
                    <span className="text-sm text-gray-500 opacity-50 text-inherit">UserName: <span className="text-inherit">{`${data.userName}`}</span></span>
                    <span className="text-sm text-gray-500 opacity-50 text-inherit">Total todo: <span className="text-inherit">{`${todo.length}`}</span></span>
                    <span className="text-sm text-gray-500 opacity-50 text-inherit">Email: <span className="text-inherit">{` ${data.email}`}</span></span>
                </div>
                <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={addTodoHandeler}
                    >Add Todo+</a>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ms-2 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={logoutHandler}
                    >Logout</a>
                </div>
            </div>
        </div>
        
        {/* <div className="flex flex-col items-center justify-center gap-4 m-4 md:flex-row">
            {
                todo.map((t)=>(
                    <article key={todo.index} className="inline-block p-4 border shadow-lg rounded-xl">
                        <h2> <span className="opacity-70">Title:</span> {t.title}</h2>
                        <p> <span className="opacity-70">Body:</span> {t.content}</p>
                        <p> <span className="capitalize opacity-70">todo id:</span> {t.id}</p>
                        <p> <span className="capitalize opacity-70">createdAt:</span> {new Date(t.createdAt).toLocaleString()}</p>
                    </article>
                ))
            }
        </div> */}
        <div className="relative overflow-auto shadow-md sm:rounded-lg">
            <table
            className="w-full text-sm text-center text-gray-500 rtl:text-right"
            >
                <thead
                className="text-xs text-gray-400 uppercase bg-gray-700"
                >
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Content</th>
                    <th scope="col" className="px-6 py-3">Todo Id</th>
                    <th scope="col" className="px-6 py-3">created At</th>
                    <th scope="col" className="px-6 py-3 text-left">Action</th>
                </thead>
                <tbody>
                    {todo.map((t)=>(
                        <tr
                        className="border border-b border-gray-700 rounded-xl" 
                        key={t.id}>
                            <th
                            className="px-6 py-4 font-semibold text-gray-600 whitespace-nowrap"
                            >{t.title}</th>
                            <td className="break-words text-pretty">{truncateString(t.content, 6)}</td>
                            
                            
                            <td className="">{t.id}</td>
                            <td>{new Date(t.createdAt).toLocaleString()}</td>
                            <td className="flex items-center gap-1 px-6 py-4 mx-auto ">
                                <Link to={{
                                    pathname:`/singleTodo/${t.id}`
                                }}
                                
                                 className="font-medium text-blue-600 hover:underline">View</Link>
                                <a href="#" onClick={()=>editHandler(t.id)} className="font-medium text-blue-600 hover:underline ms-3">Edit</a>
                                <a href="#" onClick={()=>removeHandler(t.id)} className="font-medium text-red-600 hover:underline ms-3">Remove</a>
                            </td>
                        </tr>
                       
                    ))}
                </tbody>   
            </table>
        </div>

        
        
    </div>
  )
}

export default Profile