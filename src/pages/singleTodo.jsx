import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function SingleTodo() {
    // useEffect(()=>{
    //     async function fecthSingleTodo(){
    //         console.log("TOKEN :",localStorage.getItem("token"));
    //         const userToken = `Bearer ${localStorage.getItem('token')}`
    //         console.log(userToken);
            
    //         try {
    //             console.log(todoId)
    //             const res = await axios.get('/api/todo/singleTodo',{
    //                 "todoId":11
    //             },
    //         {
    //             headers:{
    //                 'Authorization':userToken
    //             }
    //             })
    //             if(res){
    //                 console.log(res)

    //             }
    //         } catch (error) {
    //            console.log(error);
                
    //         }
    //     }
    //     fecthSingleTodo()
    // },[])
    const [data,setData] = useState({})
    const {todoId} = useParams()
    console.log(todoId)
    const token = localStorage.getItem("token")
    const authToken = `Bearer ${token}`
    console.log("TOKEN",authToken)
    async function fecthSingleTodo(todoId) {
        try {
            const fetchRes = await axios.post('/api/todo/singleTodo',
                {
                    todoId:todoId
                },
                {
                    headers:{
                        'Authorization':authToken
                    }
                }
            )
            if(fetchRes){
                // console.log("fetchRes :",fetchRes);
                // console.log("fetchRes :",fetchRes.data.singleTodo);
                setData(fetchRes.data.singleTodo)
                console.log("###############################")
                console.log(typeof(data));
                console.log((data));
                
            }
        } catch (error) {
            console.log("errror :",error);
            
        }
    }

    useEffect(()=>{
        // console.log("INside useEffect ,",todoId);
        
        fecthSingleTodo(todoId)
    },[ todoId])
  return (
    <div className="container mx-auto ">
        <div className="max-w-sm p-2 px-4 pb-4 mx-auto mt-12 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-orange-200 capitalize dark:text-orange-200">{data.title}</h2>
            <p className="mb-2 font-normal text-gray-400 text-pretty">{data.content}</p>
        </div>
    </div>
  )
}

export default SingleTodo