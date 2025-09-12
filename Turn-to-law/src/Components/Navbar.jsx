import logo from "../assets/turntolawbg.png";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  };

  const handleNestedDropdownEnter = (nested) => {
    setActiveNestedDropdown(nested);
  };

  const handleNestedDropdownLeave = () => {
    setActiveNestedDropdown(null);
  };

  return (
    <nav className="w-full bg-white shadow-sm flex items-center justify-between px-20 py-3">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8" />
        <span className="text-xl font-bold">
          <span className="text-yellow-400">TURN2LAW</span>
        </span>
      </div>
      
      <div className="flex items-center gap-6 font-semibold ml-20 text-md">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-full font-medium shadow">
          Talk To Lawyer
        </button>
        
        {/* Property Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdownEnter('property')}
          onMouseLeave={handleDropdownLeave}
        >
          <button className="flex items-center gap-1 hover:text-indigo-600 py-2">
            Property <ChevronDown size={16} />
          </button>
          <div className={`absolute top-full left-0 w-48 bg-white rounded-md shadow-lg outline-none  z-50 ${
            activeDropdown === 'property' ? 'block' : 'hidden'
          }`}>
            <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-t-md">
              Property Products
            </a>
            <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-b-md">
              Document Review
            </a>
          </div>
        </div>

        {/* Document Dropdown with Nested */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdownEnter('document')}
          onMouseLeave={handleDropdownLeave}
        >
          <button className="flex items-center gap-1 hover:text-indigo-600 py-2">
            Document <ChevronDown size={16} />
          </button>
          <div className={`absolute top-full left-0 w-56 bg-white rounded-md shadow-lg  z-50 ${
            activeDropdown === 'document' ? 'block' : 'hidden'
          }`}>
            <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-t-md">
              Document review & Consult
            </a>
            
            {/* Nested Dropdown for Startup Documents */}
            <div 
              className="relative"
              onMouseEnter={() => handleNestedDropdownEnter('startup-docs')}
              onMouseLeave={handleNestedDropdownLeave}
            >
              <a href="#" className="flex items-center justify-between px-4 py-2 font-normal text-sm hover:bg-gray-100">
                Startup Documents <ChevronRight size={16} />
              </a>
              <div className={`absolute top-0 left-full ml-1 w-48 bg-white rounded-md shadow-lg  z-60 ${
                activeNestedDropdown === 'startup-docs' ? 'block' : 'hidden'
              }`}>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-t-md">
                  MOA & AOA
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100">
                  Incorporation Documents
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-b-md">
                  Board Resolutions
                </a>
              </div>
            </div>

            {/* Nested Dropdown for Agreements */}
            <div 
              className="relative"
              onMouseEnter={() => handleNestedDropdownEnter('agreements')}
              onMouseLeave={handleNestedDropdownLeave}
            >
              <a href="#" className="flex items-center justify-between px-4 py-2 font-normal text-sm hover:bg-gray-100">
                Agreements & Contracts <ChevronRight size={16} />
              </a>
              <div className={`absolute top-0 left-full ml-1 w-48 bg-white rounded-md shadow-lg 
             z-60 ${
                activeNestedDropdown === 'agreements' ? 'block' : 'hidden'
              }`}>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-t-md">
                  Service Agreements
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100">
                  Employment Contracts
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100">
                  NDA Templates
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-b-md">
                  Partnership Agreements
                </a>
              </div>
            </div>

            <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-b-md">
              Property Documents
            </a>
          </div>
        </div>

        {/* Startup Dropdown with Nested */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdownEnter('startup')}
          onMouseLeave={handleDropdownLeave}
        >
          <button className="flex items-center gap-1 hover:text-indigo-600 py-2">
            Startup <ChevronDown size={16} />
          </button>
          <div className={`absolute top-full left-0 w-52 bg-white rounded-md shadow-lg border z-50 ${
            activeDropdown === 'startup' ? 'block' : 'hidden'
          }`}>
            {/* Nested Dropdown for Company Formation */}
            <div 
              className="relative"
              onMouseEnter={() => handleNestedDropdownEnter('company-formation')}
              onMouseLeave={handleNestedDropdownLeave}
            >
              <a href="#" className="flex items-center justify-between px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-t-md">
                Company Formation <ChevronRight size={16} />
              </a>
              <div className={`absolute top-0 left-full ml-1 w-44 bg-white rounded-md shadow-lg border z-60 ${
                activeNestedDropdown === 'company-formation' ? 'block' : 'hidden'
              }`}>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-t-md">
                  Private Limited
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100">
                  LLP Formation
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100">
                  OPC Formation
                </a>
                <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-b-md">
                  Partnership Firm
                </a>
              </div>
            </div>

            <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100">
              Intellectual Property
            </a>
            <a href="#" className="block px-4 py-2 font-normal text-sm hover:bg-gray-100 rounded-b-md">
              Registrations & Licenses
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