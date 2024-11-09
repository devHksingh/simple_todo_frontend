import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex justify-between w-full pt-4 pb-4 pl-4 pr-4 mt-12 text-white bg-gray-900">
      <div>
        <span>© 2024 Your Company, Inc. All rights reserved.</span>
      </div>
      <div className="flex items-center justify-start gap-2 md:gap-6 max-w-1/2">
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaFacebook /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaInstagram /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaXTwitter /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaSquareGithub /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaYoutube /></a>
      </div>
    </footer>
  )
}

export default Footer