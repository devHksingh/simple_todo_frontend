import { FaUserCheck } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

const Feature = () => {
  return (
    <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-8 mt-12 lg:mt-20">
            <h2 className="text-4xl font-bold tracking-tight">Features</h2>
            <p className="text-xl opacity-60">Explore the powerful tools that make YourTodo the ultimate productivity solution:</p>
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                {/* <div>
                    <h3>Task Organization</h3>
                    <p>Easily create and organize tasks. Group your tasks by category, project, or priority, and keep everything neat and organized in one place.</p>
                </div> */}
                <div>
                    <div className="flex items-center gap-6 mb-4 text-2xl"><span  className="text-2xl text-orange-400 "><FaUserCheck /></span>
                    <h3 className="font-bold ">Seamless User Experience</h3></div>
                    <p>A clean and intuitive interface allows you to quickly add, view, and edit your tasks without unnecessary complexity. YourTodo is designed for productivity without distractions.</p>
                </div>
                <div>
                    <div className="flex items-center gap-6 mb-4 text-2xl"><span  className="text-2xl text-orange-400 "><MdOutlineDevices /></span>
                    <h3 className="font-bold ">Cross-Device Sync</h3></div>
                    
                    <p>Access your tasks from anywhere with cross-device syncing. YourTodo ensures that your tasks are available on your phone, tablet, and computer for easy accessibility.</p>
                </div>
                <div>
                    <div className="flex items-center gap-6 mb-4 text-2xl"><span  className="text-2xl text-orange-400 "><MdDarkMode /></span>
                    <h3 className="font-bold ">Dark Mode</h3></div>
                    
                    <p>Work comfortably in any environment with dark mode. Switch themes easily based on your preference, day or night.</p>
                </div>
                <div>
                    <div className="flex items-center gap-6 mb-4 text-2xl"><span  className="text-2xl text-orange-400 "><FaLock /></span>
                    <h3 className="font-bold ">Security and Privacy</h3></div>
                    
                    <p>Your data is private and secure. We prioritize data encryption and security, so you can trust that your information is safe with us.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature