import axios from 'axios';
import signUpImg from '../assets/Sign up.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [loginErr,setLoginErr] = useState("")
  // console.log("Component Rendered");
  const navigate = useNavigate()

  function signUpFormHandeler(e) {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Submission Started");

    // Get input values within the function
    const emailElValue = document.querySelector('#email-input').value;
    const nameElValue = document.querySelector('#name-input').value;
    const userNameElValue = document.querySelector('#userName-input').value;
    const passwordElValue = document.querySelector('#password-input').value;
    const signUpFormEl = document.querySelector('#signUp-form')
    const emailErrorEl= document.querySelector('#emailError')
    const nameErrorEl= document.querySelector('#nameError')
    const userNameErrorEl= document.querySelector('#userNameError')
    const passwordErrorEl= document.querySelector('#passwordError')

    console.log("userNameElValue", userNameElValue);
    let invalidUserInput = false

    // Check if all required inputs have values
    // if (!emailElValue || !nameElValue || !userNameElValue || !passwordElValue) {
    //   console.log("One or more required fields are empty.");
    //   return;
    // }
    if(emailElValue.trim() === "" || !emailElValue.includes('@') || !emailElValue.includes('.com')){
      console.log("Enter Valid email id",emailElValue);
      emailErrorEl.style.display="block"
      
      emailErrorEl.textContent ="Enter Valid email id include @ and .com"
      invalidUserInput= true
    }
    if(nameElValue.trim() === ""){
      nameErrorEl.style.display='block'
      invalidUserInput= true
      // console.log("nameElValue.trim()",nameElValue.trim())
    }
    if(userNameElValue.trim() === ""){
      userNameErrorEl.style.display='block'
      invalidUserInput= true
    }
    if(passwordElValue === "" || passwordElValue.length<=3){
      passwordErrorEl.style.display='block'
      passwordErrorEl.textContent ="Password length at least 4 charcter long"
      invalidUserInput= true
    }

    // Define the async function inside to perform the API call
    async function signUpPostRequest() {
      if(!invalidUserInput){
        try {
          console.log("Inside API call");
  
          const res = await axios.post('/api/users/register', {
            email: emailElValue,
            userName: userNameElValue,
            name: nameElValue,
            password: passwordElValue
          });
  
          if (res) {
            console.log('SIGNUP RESPONSE: ', res);
            const token = res.data.token
            console.log(res.data.token);
            localStorage.setItem('token',token)
            navigate('/profile')
          }
          
        } catch (error) {
          console.log("Error in API call:", error);
          if (error.status === 400){
            // console.log("#######################");
            
            // console.log(error.response.data.message);
            setLoginErr(error.response.data.message)
            console.log(loginErr);
            
            
          }
        }finally{
          signUpFormEl.reset()
        }
      }
    }

    // Call the async function
    console.log("OUTSIDE api call");
    signUpPostRequest();
  }

  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto">
      <div className="grid items-center justify-center grid-cols-6 gap-2">
        <div className="col-span-4 max-w-[100%] flex flex-col border ml-2 p-4 rounded-lg">
          <div>
            <h2 className="font-mono text-xl text-center">Logo</h2>
            <h3 className="m-2 text-lg font-medium text-center text-orange-600">Sign up</h3>
            <p className="text-sm text-center text-slate-500">
              Sign Up Today and Start Getting Things Done!
            </p>
          </div>
          
          <form
            className="p-4 pl-4 pr-4 mt-4 rounded-md shadow-lg bg-slate-200"
            onSubmit={signUpFormHandeler}
            id='signUp-form'
          >
            <div>
              <label>
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email
                </span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email Id"
                  id="email-input"
                  className="block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400"
                />
                <span className="hidden mt-1 text-sm text-red-500 peer-invalid:block" id="emailError">Enter Valid email id</span>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <label className="inline-block">
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">
                  Name
                </span>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  id="name-input"
                  className="block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400"
                />
                <span className="hidden mt-1 text-sm text-red-500 " id="nameError">Full name is required</span>
              </label>
              <label className="inline-block">
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">
                  UserName
                </span>
                <input
                  type="text"
                  required
                  placeholder="Enter your user name"
                  id="userName-input"
                  className="block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400"
                />
                <span className="hidden mt-1 text-sm text-red-500" id="userNameError">User name is required</span>
              </label>
            </div>
            <div>
              <label>
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">
                  Password
                </span>
                <input
                  type="password"
                  required
                  id="password-input"
                  placeholder="Enter four-digit password"
                  className="block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400"
                />
                <span className="hidden mt-1 text-sm text-red-500 " id="passwordError">Password is required </span>
              </label>
            </div>
            <button
              type="submit"
              className={` mt-4 mb-2 py-1 rounded-xl font-semibold text-md bg-orange-400 hover:bg-orange-600 border-none shadow-md w-full`}
            >
              SignUp
            </button>
            <p className='font-medium text-red-500 text-md'>{loginErr?`${loginErr}`:``}</p>
          </form>
        </div>
        <div className="invisible max-w-screen-lg col-span-2 p-1 mt-2 mb-2 rounded-md md:visible bg-slate-500">
          <img src={signUpImg} alt="signUpImg" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
