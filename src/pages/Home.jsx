import heroImg from '../assets/rb_64279.webp'
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <main className=' '>
        <div className='container mx-auto'>
          <div className='flex justify-center align-middle min-h-100'>
            <div className='max-w-[50%] self-center'>
              <h2 className='font-bold text-5xl'>Stay Focused. Stay Organized. Accomplish More.</h2>
              <p className='text-sm mt-4 mb-12 copy-primary opacity-50'>Let ToDo Master guide you toward a more organized, productive life.</p>
              <Link to={'/'} className='text-cta border border-cta px-3 py-1 rounded-xl hover:bg-cta hover:text-black font-semibold shadow-lg'>Get Start</Link>
            </div>
            <div className='max-w-[50%]'>
              <img src={heroImg} height={50}/>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}

export default Home



// <div
//   className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl"
// >
//   <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
//     <div className="flex absolute left-3">
//       <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
//       <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
//       <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
//     </div>
//     <div className="flex-1 text-center text-white">status</div>
//   </div>
//   <div className="p-2.5 text-[#0f0]">
//     <div>
//       <span className="mr-2">Loading</span>
//       <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
//       <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
//       <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
//     </div>
//   </div>
// </div>