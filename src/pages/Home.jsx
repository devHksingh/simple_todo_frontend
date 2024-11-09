import heroImg from '../assets/rb_64279.webp'
import { Link } from "react-router-dom"
import About from './About'
import Feature from './Feature'

function Home() {
  return (
    <>
    
    
     <main className='container mx-auto '>
            {/* <div className='max-w-screen-lg p-4 md:p-1'>
              <div className='flex justify-center align-middle min-h-100'>
                <div className='max-w-[50%] self-center'>
                  <h2 className='text-5xl font-bold'>Stay Focused. Stay Organized. Accomplish More.</h2>
                  <p className='mt-4 mb-12 text-sm opacity-50 copy-primary'>Let ToDo Master guide you toward a more organized, productive life.</p>
                  <Link to={'/signUp'} className='px-3 py-1 font-semibold border shadow-lg text-cta border-cta rounded-xl hover:bg-cta hover:text-black'>Get Start</Link>
                </div>
                <div className='max-w-[50%]'>
                  <img src={heroImg} height={50}/>
                </div>
              </div>
            </div> */}

            <div className='flex items-center justify-center min-h-screen p-4 mx-auto mt-4 md:p-1'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='order-2 '>
                  <h2 className='text-4xl font-bold md:text-5xl leading-tighter'>Stay Focused. Stay Organized. Accomplish More.</h2>
                  <p className='mt-4 mb-12 text-sm opacity-50 copy-primary'>Let ToDo Master guide you toward a more organized, productive life.</p>
                  <Link to={'/signUp'} className='px-3 py-1 font-semibold border shadow-lg text-cta border-cta rounded-xl hover:bg-cta hover:text-black'>Get Start</Link>
                </div>
                <div className='order-1 max-w-[90%] '>
                  <img src={heroImg} height={50} />
                </div>
              </div>
            </div>
            
            <About/>
            <Feature/>
      </main> 
    
    </>
    

  )
}

export default Home



// <div
//   className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl"
// >
//   <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
//     <div className="absolute flex left-3">
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