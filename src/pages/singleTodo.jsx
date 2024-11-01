import axios from "axios"
import { useEffect } from "react"
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
    // const [data,setData] = useState([])
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
                console.log("fetchRes :",fetchRes);
                
            }
        } catch (error) {
            console.log("errror :",error);
            
        }
    }

    useEffect(()=>{
        console.log("INside useEffect ,",todoId);
        
        fecthSingleTodo(todoId)
    },[ todoId])
  return (
    <div>singleTodo</div>
  )
}

export default SingleTodo