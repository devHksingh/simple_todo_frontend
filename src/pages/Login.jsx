// import { useState } from "react";
import { useNavigate } from "react-router-dom"
import LoginImg from "../assets/Computer login-rafiki.webp"
import axios from "axios"
import { config } from "../config/config"


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
  const navigate = useNavigate()
  
  
  function submitHandeler(event){
    
    event.preventDefault()
    
    
    // console.log(event);
    const emailEl = document.querySelector('#email')
    const emailElValue = emailEl.value
    const passwordEl = document.querySelector('#password')
    const passwordElValue = passwordEl.value
    const emailErrorEl = document.querySelector("#emailError")
    const passwordErrorEl = document.querySelector("#passwordError")
    const formBtnEl = document.querySelector('#form-btn')
    const loginErrorEl = document.querySelector('#login-error')
    // const loaderEl = document.querySelector('#loader')

    // console.log(loaderEl);
    formBtnEl.textContent = 'Processing'
    formBtnEl.disabled= true
    formBtnEl.style.opacity ='60%';
    formBtnEl.style.cursor ='not-allowed'
    // loaderEl.classList.remove='hidden'
    // loaderEl.style.display='inline-block'
    // console.log(loaderEl);
    
    

    // console.log(emailEl);
    // console.log(emailElValue);
    // console.log(formSchema.parse({email:emailElValue,password:passwordElValue}));
    // console.log(emailElValue);
    
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
        console.log("config.backendDomain :",config.backendDomain)
        console.log("config.backendDomain :",import.meta.env.BACKEND_URL)
        const res = await axios.post(`${config.backendDomain}/api/users/login`,{
          email:emailElValue,
          password:passwordElValue
        })
        if(res){
          // console.log(res);
          console.log(res.data);
          localStorage.setItem("token",res.data.token)
          navigate('/profile')
        }
      } catch (error) {
        console.log(error);
        // console.log(error.message);
        // console.log(error.status);
        loginErrorEl.textContent= 'Login error!. Check your credential.Try it again!'
        
      }finally{
        formBtnEl.textContent ='login'
        // loaderEl.style.display='none'
        formBtnEl.disabled= false
        formBtnEl.style.opacity ='100%';
        console.log('formBtnEl',formBtnEl);
        formBtnEl.style.cursor ='pointer'
        document.querySelector('#loginForm').reset()
      }
    }
    postReq()

    
    // passwordEl.reset()
    // console.log("emailEl",emailEl.textContent);
    // console.log("passwordEl",passwordEl.textContent);
    
    
  }
//   function submitHandeler(event) {
//     event.preventDefault(); // Prevent form submission refresh
   

    
//     const emailEl = document.querySelector('#email');
//     const passwordEl = document.querySelector('#password');
    
//     if (!emailEl || !passwordEl) {
//         console.log("Email or Password elements are missing");
//         return;
//     }

//     const emailElValue = emailEl.value;
//     const passwordElValue = passwordEl.value;

//     const emailErrorEl = document.querySelector("#emailError");
//     const passwordErrorEl = document.querySelector("#passwordError");
//     const loginErrorEl = document.querySelector('#login-error');
//     loginErrorEl.textContent=''

//     if (!emailElValue.includes('@') || !emailElValue.includes('.com')) {
//         emailErrorEl.style.display = "block";
//         emailErrorEl.textContent = "Enter a valid email id.";
//     }

//     if (passwordElValue.length <= 3) {
//         passwordErrorEl.textContent = "Password must be at least 4 characters long.";
//     }

//     // Async API call
//     async function postReq() {
//         try {
//             const res = await axios.post('/api/users/login', {
//                 email: emailElValue,
//                 password: passwordElValue
//             });

//             if (res) {
//                 // Update loading state after success
                
//                 console.log(res.data);
//             }
//         } catch (error) {
//             console.error(error);
//             loginErrorEl.textContent = 'Login error! Check your credentials and try again.';
//         } 
//     }

//     // Call the API
//     postReq();

//     // Reset the form (optional)
//     document.querySelector('#loginForm').reset();
// }

  return (
    // <div className="">
    //   <div className="container mx-auto ">
    //     <div className="grid items-center justify-center h-screen max-w-full grid-cols-2 border place-content-center">
          // <div className="flex flex-col gap-4 border md:p-8 p-2 rounded-xl shadow-lg max-w-[100%]  self-center w-full ">
          //   <h2 className="mb-4 text-4xl font-bold text-center text-gray-200">Login</h2>
          //   <form name="LoginForm" onSubmit={submitHandeler} id="loginForm"
          //   className="flex flex-col max-w-full gap-4 p-8 border shadow-lg rounded-xl">
          //     <label className="block" htmlFor="Email">
          //       <span className="block mb-1 text-gray-500 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
          //       <input  
          //       className="w-full p-1 font-medium text-black rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-gray-600" type="email" name="Email" id="email" placeholder="Email" />
          //       <span className="hidden mt-2 text-sm text-red-500 peer-invalid:block" id="emailError">Enter Valid email id</span>
          //     </label>
          //     <label htmlFor="password">
          //       <span className="block mb-1 text-gray-500 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Password</span>
          //       <input
          //       className="w-full p-1 font-medium text-black rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-gray-600"
          //       type="password" name="password" id="password" placeholder="Password" />
          //       <span className="mt-2 text-sm text-red-500" id="passwordError"></span>
          //     </label>
          //     {/* <button 
          //     className="py-1 mt-2 font-semibold bg-orange-400 border border-none shadow-md rounded-xl text-md hover:bg-orange-600"
          //     type="submit"
              
          //     >Login</button> */}
          //     <button id="form-btn"
          //       className={`border mt-2 py-1 rounded-xl font-semibold text-md bg-orange-400 hover:bg-orange-600 border-none shadow-md `}
          //       type="submit"
          //       // disabled={isloading} // Disable the button when loading
          //     >Login
          //       {/* <span className="inline-block ml-2" id="loader">
          //         <span className="inline-block bg-black   shadow rounded-full px-[0.125rem] py-[0.125rem] animate-ping  ml-2 duration-0  " ></span>
          //         <span className="inline-block bg-black   shadow rounded-full px-[0.125rem] py-[0.125rem] animate-ping  ml-2 duration-700  " ></span>
          //         <span className="inline-block  bg-black   shadow rounded-full px-[0.125rem] py-[0.125rem] animate-ping  ml-2 duration-1000  " ></span>
          //       </span> */}
          //     </button>
              
          //     <span className="text-red-600 text-md" id="login-error"></span>
          //   </form>
            
          // </div>
          // <div className="invisible max-w-screen-lg md:visible">
          //   <img src={LoginImg} alt="login image"  />
          // </div>
    //     </div>
    //   </div>
      
    // </div>
    <div className="container mx-auto"> 
      <div className="grid items-center justify-center min-h-screen grid-cols-1 gap-2 mt-6 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 border md:p-8 p-2 rounded-xl shadow-lg max-w-[88%] mx-auto self-center w-full ">
            <h2 className="mb-4 text-4xl font-bold text-center text-gray-200">Login</h2>
            <form name="LoginForm" onSubmit={submitHandeler} id="loginForm"
            className="flex flex-col max-w-full gap-4 p-8 border shadow-lg rounded-xl">
              <label className="block" htmlFor="Email">
                <span className="block mb-1 text-gray-500 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                <input  
                className="w-full p-1 font-medium text-black rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-gray-600" type="email" name="Email" id="email" placeholder="Email" />
                <span className="hidden mt-2 text-sm text-red-500 peer-invalid:block" id="emailError">Enter Valid email id</span>
              </label>
              <label htmlFor="password">
                <span className="block mb-1 text-gray-500 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Password</span>
                <input
                className="w-full p-1 font-medium text-black rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-gray-600"
                type="password" name="password" id="password" placeholder="Password" />
                <span className="mt-2 text-sm text-red-500" id="passwordError"></span>
              </label>
              {/* <button 
              className="py-1 mt-2 font-semibold bg-orange-400 border border-none shadow-md rounded-xl text-md hover:bg-orange-600"
              type="submit"
              
              >Login</button> */}
              <button id="form-btn"
                className={`border mt-2 py-1 rounded-xl font-semibold text-md bg-orange-400 hover:bg-orange-600 border-none shadow-md `}
                type="submit"
                // disabled={isloading} // Disable the button when loading
              >Login
                {/* <span className="inline-block ml-2" id="loader">
                  <span className="inline-block bg-black   shadow rounded-full px-[0.125rem] py-[0.125rem] animate-ping  ml-2 duration-0  " ></span>
                  <span className="inline-block bg-black   shadow rounded-full px-[0.125rem] py-[0.125rem] animate-ping  ml-2 duration-700  " ></span>
                  <span className="inline-block  bg-black   shadow rounded-full px-[0.125rem] py-[0.125rem] animate-ping  ml-2 duration-1000  " ></span>
                </span> */}
              </button>
              
              <span className="text-red-600 text-md" id="login-error"></span>
            </form>
            
          </div>
          <div className="max-w-screen-lg md:visible">
            <img src={LoginImg} alt="login image"  />
          </div>
      </div>
    </div>
    
  )
}

export default Login