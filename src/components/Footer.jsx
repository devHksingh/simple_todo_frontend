import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex justify-between absolute bottom-0 p-2 w-full pl-4 pr-4">
        <div className=""><span>© 2024 Your Company, Inc. All rights reserved.</span></div>
        <div className="flex gap-6 justify-start">
            <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400"><FaFacebook /></a>
            <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaInstagram /></a>
            <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaXTwitter /></a>
            <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaSquareGithub /></a>
            <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaYoutube /></a>
        </div>
    </footer>
  )
}

export default Footer