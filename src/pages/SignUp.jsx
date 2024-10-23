import signUpImg from '../assets/Sign up.webp'

function SignUp() {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto ">
      
      <div className='grid items-center justify-center grid-cols-6 gap-2'>
        <div className=' col-span-4 max-w-[100%] flex flex-col border  ml-2 p-4 rounded-lg'>
          <div >
            <h2 className='font-mono text-xl text-center'>Logo</h2>
            <h3 className='m-2 text-lg font-medium text-center text-orange-600'>Sign up</h3>
            <p className='text-sm text-center text-slate-500'>Sign Up Today and Start Getting Things Done!</p>
          </div>
          <form method='post' className='p-4 pl-4 pr-4 mt-4 rounded-md shadow-lg bg-slate-200'>
            <div>
              <label>
              <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                <input 
                type='email'
                required
                autoComplete="email"
                placeholder='Enter your email Id'
                className='block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400'/>
                <span className='inline-block '></span>
              </label>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <label className='inline-block '>
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Name</span>
                <input 
                type='text'
                required
                placeholder='Enter your name'
                className='block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400'/>
                <span className='inline-block '></span>
              </label>
              <label className='inline-block '>
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">UserName</span>
                <input 
                type='text'
                required
                placeholder='Enter your user name'
                className='block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400'/>
                <span className='inline-block '></span>
              </label>
            </div>
            <div>
              <label>
                <span className="block mb-1 text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Passowrd</span>
                <input 
                type='password'
                required
                placeholder='Enter four digit password'
                className='block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400'/>
                <span className='inline-block '></span>
              </label>
            </div>
            <button type="submit" className={`border mt-2 py-1 rounded-xl font-semibold text-md bg-orange-400 hover:bg-orange-600 border-none shadow-md w-full`}>SignUp</button>
          </form>
        </div>
        <div className='invisible max-w-screen-lg col-span-2 p-1 mt-2 mb-2 rounded-md md:visible bg-slate-500'>
          <img src={signUpImg} alt="signUpImg" />
        </div>
      </div>

    </div>
  )
}

export default SignUp