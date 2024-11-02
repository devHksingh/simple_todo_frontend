import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function SingleTodo() {
    
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

    async function submitHandler(e) {
        e.preventDefault();
        console.log("submitHandler");
    
        const titleElValue = document.querySelector('#inputTitle').value;
        const contentElValue = document.querySelector('#inputContent').value;
        console.log("contentElValue :" ,contentElValue)
    
        try {
            const patchRes = await axios.patch(
                '/api/todo/update',
                {
                    id: Number(todoId),
                    title: titleElValue,
                    content: contentElValue
                },
                {
                    headers: {
                        'Authorization': authToken
                    }
                }
            );
            
            if (patchRes) {
                console.log("Update successful");
                console.log("patchRes:", patchRes);
            }
        } catch (error) {
            console.log("Error updating todo:", error);
        }
    }
    

    useEffect(()=>{
        // console.log("INside useEffect ,",todoId);
        
        fecthSingleTodo(todoId)
    },[ todoId ])
  return (
    <div className="container mx-auto ">
        <div className="max-w-sm p-2 px-4 pb-4 mx-auto mt-12 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
        id="taskContainer"
        >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-orange-200 capitalize dark:text-orange-200">{data.title}</h2>
            <p className="mb-2 font-normal text-gray-400 text-pretty">{data.content}</p>
            <button
            className="px-3 py-2 mt-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >Edit task</button>
        </div>
        <div>
            <form className="flex flex-col max-w-sm gap-4 p-4 mx-auto bg-gray-800 border rounded-lg"
            id="editForm"
            onSubmit={submitHandler}
            >
                <label>
                    <span className="block mb-2">Title</span>
                    <input className="w-full p-1 font-medium text-black capitalize bg-gray-400 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 ring-2 "
                    type="text"
                    defaultValue={data.title}
                    spellCheck
                    id="inputTitle"
                    
                    />
                </label>
                <label>
                    <span className="block mb-2">Body</span>
                    <textarea rows={6}
                    className="w-full p-1 font-medium text-black capitalize bg-gray-400 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 ring-4 "
                    defaultValue={data.content}
                    id="inputContent"
                    
                    />
                </label>
                <button type="submit" 
                className="bg-[#7a5540] p-1 rounded-lg hover:bg-[#bb8063] font-medium text-lg my-4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >Save</button>
            </form>
        </div>
    </div>
  )
}

export default SingleTodo