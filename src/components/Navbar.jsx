import { NavLink,Link } from "react-router-dom"


function Navbar() {
    const tabs = ["Home","About","Feature"]
    const btns = ["SignIn","SignUp"]
  return (
    <header>
        <nav>
            <div>
                <h1>lOGO</h1>
            </div>
            {/* menu */}
            <div>
                <ul>
                    {tabs.map((tab)=>(
                        <DisplayMenuLink
                            key= {tabs.indexOf(tab)}
                            text= {tab}
                        />
                    ))}
                </ul>
            </div>
            {/* buttons */}
            <div>
                {btns.map((btn)=>(
                    <DispalyBtn
                        key={btns.indexOf(btn)}
                        text={btn}
                    />
                ))}
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
        <a>
            <Link>{text}</Link>
        </a>
    )
}

export default Navbar