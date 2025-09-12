import logo from "../assets/turntolawbg.png";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm flex items-center justify-between px-20 py-3">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8" />
        <span className="text-xl font-bold">
          <span className="text-yellow-400">TURN2LAW</span>
        </span>
      </div>
      <div className="flex items-center gap-6 font-semibold ml-20">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-full font-medium shadow">
          Talk To Lawyer
        </button>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Property <ChevronDown size={16} />
          </button>
          <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Property A
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Property B
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Document <ChevronDown size={16} />
          </button>
          <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Agreement
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Contract
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Startup <ChevronDown size={16} />
          </button>
          <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Incorporation
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Funding Docs
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-indigo-600">Challan</a>
        <a href="#" className="hover:text-indigo-600">Vehicle Report</a>
        <a href="#" className="hover:text-indigo-600">Blogs</a>
      </div>
      <a href="#" className="text-indigo-600 font-semibold">Login</a>
    </nav>
  );
};

export default Navbar;
