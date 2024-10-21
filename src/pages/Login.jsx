import LoginImg from "../assets/Computer login-rafiki.webp"
import axios from "axios"


// async function  apiCall(){
//   try {
//     const {data} = await axios.get('/api/todo/allTodos')

//     if(data){
//       console.log('data axios',data);
      
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
 


function Login() {
  
  // apiCall()
  // formdata
  function submitHandeler(event){
    event.preventDefault()
    console.log(event);
    const emailEl = document.querySelector('#email')
    const emailElValue = emailEl.value
    const passwordEl = document.querySelector('#password')
    const passwordElValue = passwordEl.value
    const emailErrorEl = document.querySelector("#emailError")
    const passwordErrorEl = document.querySelector("#passwordError")

    console.log(emailEl);
    console.log(emailElValue);
    // console.log(formSchema.parse({email:emailElValue,password:passwordElValue}));
    console.log(emailElValue);
    
    if(emailElValue === "" || !emailElValue.includes('@') || !emailElValue.includes('.com')){
      console.log("Enter Valid email id",emailElValue);
      emailErrorEl.style.display="block"
      
      emailErrorEl.textContent ="Enter Valid email id include @ and .com"
    }

    if(passwordElValue.length <=3){
      passwordErrorEl.textContent ="Password length at least 4 charcter long"
    }
    
    async function postReq() {
      try {
        const res = await axios.post('/api/users/login',{
          email:emailElValue,
          password:passwordElValue
        })
        if(res){
          console.log(res);
          console.log(res.data);
          
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    postReq()

    document.querySelector('#loginForm').reset()
    // passwordEl.reset()
    console.log("emailEl",emailEl.textContent);
    console.log("passwordEl",passwordEl.textContent);
    
    
  }
  return (
    <div className="">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 justify-center place-content-center items-center min-h-full">
          <div className="flex flex-col gap-4 border p-8 rounded-xl shadow-lg max-w-[88%]  self-center w-full ">
            <h2 className="text-4xl text-center mb-4 font-bold text-gray-200">Login</h2>
            <form name="LoginForm" onSubmit={submitHandeler} id="loginForm"
            className="flex flex-col gap-4 max-w- border p-8 rounded-xl shadow-lg">
              <label className="block" htmlFor="Email">
                <span className="block mb-1 text-gray-500 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                <input  
                className="peer w-full rounded-lg p-1 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-gray-600 text-black font-medium" type="email" name="Email" id="email" placeholder="Email" />
                <span className="hidden mt-2 peer-invalid:block text-red-500 text-sm" id="emailError">Enter Valid email id</span>
              </label>
              <label htmlFor="password">
                <span className="block mb-1 text-gray-500 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Password</span>
                <input
                className="w-full rounded-lg p-1 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-gray-600 text-black font-medium"
                type="password" name="password" id="password" placeholder="Password" />
                <span className="text-red-500 text-sm mt-2" id="passwordError"></span>
              </label>
              <button 
              className="border mt-2 py-1 rounded-xl font-semibold text-md bg-orange-400 hover:bg-orange-600 border-none shadow-md"
              type="submit"
              
              >Login</button>
            </form>
          </div>
          <div className="invisible md:visible max-w-screen-lg">
            <img src={LoginImg} alt="login image"  />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login