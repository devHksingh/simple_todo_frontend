import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const btnsNavigation = [
        { text: "SignIn", href: "signIn" },
        { text: "SignUp", href: "signUp" }
    ];

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme"))
    );

    // Apply theme to body on load and when `isDarkMode` changes
    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light";
        document.body.classList.add(theme);
        document.body.classList.remove(isDarkMode ? "light" : "dark");

        // Save theme preference to localStorage
        localStorage.setItem("theme", theme);
    }, [isDarkMode]);

    // Toggle theme and update state
    function toggleDark() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    // Other event handlers (e.g., for menu button)
    function handleNavBtn() {
        document.getElementById('mob-nav-container').style.display = 'none';
        document.getElementById('menu-open-btn').style.display = 'block';
        document.getElementById('menu-close-btn').style.display = 'none';
    }

    function handleOpenMenu() {
        document.getElementById('menu-open-btn').style.display = 'none';
        document.getElementById('menu-close-btn').style.display = 'block';
        document.getElementById('mob-nav-container').style.display = 'block';
    }

    function handleCloseMenu() {
        document.getElementById('menu-open-btn').style.display = 'block';
        document.getElementById('menu-close-btn').style.display = 'none';
        document.getElementById('mob-nav-container').style.display = 'none';
    }

    return (
        <header className="w-full bg-slate-800">
            <div className="container w-full mx-auto">
                <nav className="flex justify-center w-full p-4 text-white md:justify-between">
                    <div className="self-center">
                        <h1 className="font-semibold capitalize text-pretty"><Link to=''>LOGO</Link></h1>
                    </div>

                    {/* Buttons */}
                    <div className="flex md:gap-2">
                        <div className="self-center invisible space-x-4 md:visible">
                            {btnsNavigation.map((btn) => (
                                <Link to={btn.href} key={btn.text} className="px-2 py-[0.245rem] font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 align-middle">
                                    {btn.text}
                                </Link>
                            ))}
                        </div>

                        {/* Dark Mode Toggle */}
                        <div className="flex items-center self-center gap-2 px-2 py-1 text-center outline-none">
                            <label className="relative flex gap-2 self-center cursor-pointer bg-gray-600 rounded-full transition w-16 px-12 py-[0.2rem]">
                                <input type="checkbox" onClick={toggleDark}
                                    checked={isDarkMode}
                                    className="sr-only"
                                    readOnly
                                />
                                <span className="absolute inset-x-0 left-0 m-1 bg-gray-600 rounded-full ring-4 ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-1 peer-checked:bg-white peer-checked:ring-[#ffbb52] duration-500"></span>
                                <span className="self-center font-medium duration-500 ease-in-out text-slate-200">
                                    {isDarkMode ? "Light" : "Dark"}
                                </span>
                            </label>
                        </div>

                        {/* Menu Toggle Buttons for Mobile */}
                        <div className="self-center md:hidden">
                            <button className="text-xl hover:text-[#ffbb52]" id="menu-open-btn" onClick={handleOpenMenu}><FiMenu /></button>
                            <button className="hidden text-xl hover:text-[#ffbb52]" id="menu-close-btn" onClick={handleCloseMenu}><RxCross2 /></button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="absolute right-0 hidden w-1/2 p-4 mt-12 text-center rounded-lg bg-slate-600 h-1/4 opacity-90" id="mob-nav-container">
                        <div className="flex flex-col justify-around gap-6 text-lg">
                            {btnsNavigation.map((btn) => (
                                <Link className="px-2 py-[0.245rem] font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 mt-4"
                                    onClick={handleNavBtn}
                                    key={btn.text}
                                    to={btn.href}
                                >
                                    {btn.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
