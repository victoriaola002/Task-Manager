import React, {useState} from "react";
import { Link } from "react-router-dom";
import TaskLogo from "../assets/TaskLogo.svg";
import profilePhoto from "../assets/profile photo.png";
import { Menu, X } from "lucide-react";
const NavBar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="mx-auto w-10/12 py-5 flex items-center justify-between">
    
      <div className="flex items-center gap-3">
        <img src={TaskLogo} alt="tasklogo"className="w-8 md:w-auto" />
        <h1 className="text-2xl font-semibold text-[#2D0050]">TaskDuty</h1>
      </div>

      <div className="flex gap-8 items-center hidden md:flex">
        <ul className="flex gap-7 items-center text-lg">
         <Link to="/newtask"> <li>New Task</li></Link>
         <Link to="/mytask"><li>All Tasks</li></Link>
        </ul>
        <div className="relative">
          <img
            src={profilePhoto}
            alt="photo"
            className="w-15 h-15 object-cover rounded-full border border-gray-900"
          />
          <div className="bg-[#974FD0] h-4 w-4 -top-1 right-1 rounded-full absolute"></div>
        </div>
      </div>
      {/* mobile menu */}
    <div className="flex md:hidden items-center gap-3">

 <div className="relative">
            <img
              src={profilePhoto}
              alt="photo"
              className="w-10 h-10 object-cover rounded-full border border-gray-900"
            />

            <div className="bg-[#974FD0] h-3 w-3 -top-1 right-0 rounded-full absolute"></div>
          </div>
    <button onClick={()=> setMenuOpen(!menuOpen)} className="text-[#2D0050]">
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
    </div>
      
  </div>
   {menuOpen && (
        <div className="md:hidden mt-5 border-t pt-4 mx-4">
          <ul className="flex flex-col gap-4 text-lg">

            <li>
              <Link
                to="/newtask"
                onClick={() => setMenuOpen(false)}
              >
                New Task
              </Link>
            </li>

            <li>
              <Link
                to="/mytask"
                onClick={() => setMenuOpen(false)}
              >
                All Tasks
              </Link>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
