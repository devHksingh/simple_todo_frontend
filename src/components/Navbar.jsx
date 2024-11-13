import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    // const tabs = ["Home","About","Feature"]
    
    const btnsNavigation = [
        {text:"SignIn",href:'signIn'},
        {text:"SignUp",href:'signUp'}
    ]
    const menuOpenBtnEl = document.querySelector('#menu-open-btn')
    const menuCloseBtnEl = document.querySelector('#menu-close-btn')
    const mobDivEl = document.querySelector('#mob-nav-container')
    const [isdarkMode,setIsDarkMode] = useState(false)
    // function toggleDark(){
    //     setIsDarkMode(!isdarkMode)
       
    //     if(isdarkMode){
    //         localStorage.setItem("theme","dark")
    //     }else{
    //         localStorage.setItem("theme","light")
    //     }
    //     const selectedTheme = localStorage.getItem("theme")
    //     if(selectedTheme === 'dark'){
    //         document.body.classList.add(selectedTheme)
    //         document.body.classList.remove('light')
    //     }else if(window.matchMedia("prefers-color-schema: dark").matches){
    //         console.log("prefers-color-schema: dark");
            
    //         document.body.classList.remove("light")
    //         document.body.classList.add("dark")
    //     }else{
    //         console.log("LIGHT");
    //         document.body.classList.remove("dark")
    //         document.body.classList.add("light")
    //     }
        
    // }

    function toggleDark() {
        const newTheme = !isdarkMode ? "dark" : "light";
        setIsDarkMode(!isdarkMode);
    
        // Set theme in local storage
        localStorage.setItem("theme", newTheme);
    
        // Apply theme to body
        if (newTheme === "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }
    
    // Run this on initial load to check saved theme or prefers-color-scheme setting
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            setIsDarkMode(savedTheme === "dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.body.classList.add("light");
            setIsDarkMode(false);
        }
    }, []);
    
    
    // Run this on initial load to check saved theme or prefers-color-scheme setting
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            setIsDarkMode(savedTheme === "dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.body.classList.add("light");
            setIsDarkMode(false);
        }
    }, []);
    
    
    function handleNavBtn(){
        mobDivEl.style.display='none'
        menuOpenBtnEl.style.display='block'
        menuCloseBtnEl.style.display='none'
    }
    
    function handleOpenMenu(){
        menuOpenBtnEl.style.display='none'
        menuCloseBtnEl.style.display='block'
        mobDivEl.style.display='block'
        
    }
    function handleCloseMenu(){
        menuOpenBtnEl.style.display='block'
        menuCloseBtnEl.style.display='none'
        mobDivEl.style.display='none'
        
    }
  return ( 
    <header className="w-full bg-slate-800">
        <div className="container w-full mx-auto">
            <nav className="flex justify-center w-full p-4 text-white md:justify-between">
                <div className="self-center">
                    <h1 className="font-semibold capitalize text-pretty"><Link to=''>lOGO</Link></h1>
                </div>
                {/* menu */}
                {/* <div className="self-center invisible md:visible">
                    <ul className="flex justify-between gap-1 align-middle md:gap-8 ">
                        {tabs.map((tab)=>(
                            <DisplayMenuLink
                                key= {tabs.indexOf(tab)}
                                text= {tab}
                            />
                        ))}
                    </ul>
                </div> */}
                {/* buttons */}
                {/* <div className="self-center space-x-4">
                    {btns.map((btn)=>(
                        <DispalyBtn
                            key={btns.indexOf(btn)}
                            text={btn}
                        />
                    ))}
                </div> */}
                <div className="flex md:gap-2">
                    <div className="self-center invisible space-x-4 md:visible">
                        {btnsNavigation.map((btn)=>(
                            <Link to={`${btn.href}`} key={btn.text} className="px-2 py-[0.245rem] font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 align-middle ">{btn.text}</Link>
                        ))}
                    </div>
                    

                    <div className="flex items-center self-center gap-2 px-2 py-1 text-center outline-none">
                            <label className=" relative flex  gap-2 self-center cursor-pointer bg-gray-600 rounded-full  transition has-[:checked]:bg-slate-900 [-webkit-tap-highlight-color:_transparent]  w-16 px-12 py-[0.2rem] has-[:checkeg]:text-orange-600 ">
                                
                                <input type="checkbox" onClick={toggleDark}
                                className=" has-[:checked]:bg-amber-600 has-[:checked]:border-amber-600 peer self-center  sr-only"
                                />
                                <span
                                className="absolute inset-x-0 left-0 size-4 m-1 bg-gray-600 rounded-full ring-[4px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-1 peer-checked:bg-white peer-checked:ring-[#ffbb52] duration-500"
                                ></span>
                                
                                <span className=" self-center font-medium  text-slate-200 peer-[:checked]:text-[#ffbb52] ease-in-out duration-500">{!isdarkMode? `Light`:`Dark`}</span>
                                
                            </label>
                            
                    </div>
                    <div className="self-center md:hidden">
                        <button className=" text-xl hover:text-[#ffbb52] md:hidden" id="menu-open-btn" onClick={handleOpenMenu}><FiMenu /></button>
                        <button className="hidden text-xl hover:text-[#ffbb52] md:hidden" id="menu-close-btn"
                        onClick={handleCloseMenu}><RxCross2 /></button>
                        
                    </div>
                    
                </div>

                <div className="absolute right-0 hidden w-1/2 p-4 mt-12 text-center rounded-lg bg-slate-600 h-1/4 opacity-90" id="mob-nav-container">
                    <div className="flex flex-col justify-around gap-6 text-lg">
                        {btnsNavigation.map((btn)=>(
                            <Link 
                            className="px-2 py-[0.245rem] font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 align-middle mt-4"
                            onClick={handleNavBtn}
                            key={btn.text} to={btn.href}>{btn.text}</Link>
                        ))}
                    </div>
                </div>
                

                
                    
                    
                    
                
            </nav>
        </div>
    </header>
  )
}

// eslint-disable-next-line react/prop-types
// function DisplayMenuLink({text}){

//     if(text === "Home"){
//         return (
//             <li>
//                 <NavLink to={``}
//             className={({isActive})=>`text-gray-200 font-semibold duration-200 
//                ${isActive?`text-orange-400 border-b border-sky-600`:``}
//                 hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}
//             >{text}</NavLink>
//             </li>
//         )
//     }else{
//         return (
//             <NavLink to={`/${text}`}
//             className={({isActive})=>`text-gray-200 font-semibold duration-200 
//                ${isActive?`text-orange-400 border-b border-sky-600`:``}
//                 hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}
//             >{text}</NavLink>
//         )
//     }

//     // return (
//     //     <li>
            
//     //     </li>
//     // )
// }

/*
<NavLink to={`/${text}`}
            className={({isActive})=>`text-gray-200 font-semibold duration-200 
               ${isActive?`text-orange-400 border-b border-sky-600`:``}
                hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}
            >{text}</NavLink>
*/

// function DispalyBtn({text}){
//     return (
//         <a className="">
//             <Link className="px-2 py-[0.245rem] font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 align-middle ">{text}</Link>
//         </a>
//     )
// }


export default Navbar