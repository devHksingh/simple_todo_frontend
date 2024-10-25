

function CreateNewTodo() {
  return (
    <div
    className="container content-center mx-auto  bg-[#17120f]  items-center min-h-[100%] p-4 rounded-lg mt-16 mb-4 max-w-4xl shadow-lg bg-gradient-to-br from-[#333333] via-[#191919] to-[#000000] text-white"
    >
        <form className="flex flex-col max-w-full gap-4 p-4 border rounded-lg shadow justify-evenly">
            <label className="space-y-2">
                <span className="block text-gray-400 text:md after:content-['*'] after:ml-0.5 after:text-red-500">Title</span>
                <input
                type="text"
                required
                placeholder="Enter title"
                className="block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400"
                />
                <span className="hidden mt-2 text-sm text-red-500 peer-invalid:block" id="emailError">Title is requried</span>
            </label>
            <label className="space-y-2">
                <span 
                className="block text-gray-400 text:md"
                >Body</span>
                {/* <input
                type="text"
                placeholder=""
                className="block w-full p-1 font-medium text-black border rounded-lg peer focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 placeholder:text-gray-400"
                
                /> */}
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg focus:outline-none  focus:ring-blue-500 focus:border-blue-500 ring-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="Write your thoughts here..."></textarea>
               
            </label>
            <button type="submit"
            className="bg-[#7a5540] p-1 rounded-lg hover:bg-[#bb8063] font-medium text-lg my-4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >Create Todo</button>
        </form>

    </div>



  )
}

export default CreateNewTodo