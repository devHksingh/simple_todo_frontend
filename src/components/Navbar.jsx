import { useState } from "react"
import { NavLink,Link } from "react-router-dom"


function Navbar() {
    const tabs = ["Home","About","Feature"]
    const btns = ["SignIn","SignUp"]
    const [isdarkMode,setIsDarkMode] = useState(true)
    function toggleDark(){
        setIsDarkMode(!isdarkMode)
        if(isdarkMode){
            localStorage.setItem("theme","dark")
        }else{
            localStorage.setItem("theme","light")
        }
        const selectedTheme = localStorage.getItem("theme")
        if(selectedTheme === 'dark'){
            document.body.classList.add(selectedTheme)
            document.body.classList.remove('light')
        }else{
            console.log("LIGHT");
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }
    }
  return (
    <header>
        <nav className="flex justify-between p-4 bg-slate-800 text-white align-middle">
            <div className="self-center">
                <h1>lOGO</h1>
            </div>
            {/* menu */}
            <div className="self-center">
                <ul className="flex gap-1 md:gap-8 align-middle justify-between ">
                    {tabs.map((tab)=>(
                        <DisplayMenuLink
                            key= {tabs.indexOf(tab)}
                            text= {tab}
                        />
                    ))}
                </ul>
            </div>
            {/* buttons */}
            <div className="space-x-4 self-center">
                {btns.map((btn)=>(
                    <DispalyBtn
                        key={btns.indexOf(btn)}
                        text={btn}
                    />
                ))}
            </div>
                

            
                
                <div className=" flex  px-4 py-1 text-center lign-middle cursor-pointer  outline-none self-center ">
                    <label className=" relative flex  gap-2 self-center cursor-pointer bg-gray-600 rounded-full  transition has-[:checked]:bg-slate-900 [-webkit-tap-highlight-color:_transparent]  w-16 px-12 py-[0.2rem] has-[:checkeg]:text-orange-600 ">
                        
                        <input type="checkbox" onClick={toggleDark}
                        className=" has-[:checked]:bg-amber-600 has-[:checked]:border-amber-600 peer self-center  sr-only"
                        />
                        <span
                        className="absolute inset-x-0 left-0 size-4 m-1 bg-gray-600 rounded-full ring-[4px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-1 peer-checked:bg-white peer-checked:ring-transparent"
                        ></span>
                        
                        <span className=" self-center font-medium  text-slate-200 peer-[:checked]:text-orange-600">{!isdarkMode? `Light`:`Dark`}</span>
                    </label>
                </div>
                
            
        </nav>
    </header>
  )
}

function DisplayMenuLink({text}){
    return (
        <li>
            <NavLink>{text}</NavLink>
        </li>
    )
}

function DispalyBtn({text}){
    return (
        <a className="outline outline-1 px-2 py-[0.2rem] rounded-xl text-center align-middle">
            <Link>{text}</Link>
        </a>
    )
}

export default Navbar