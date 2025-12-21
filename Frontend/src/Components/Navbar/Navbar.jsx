import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const activeClass = "text-[#1f7a4d] font-semibold";
  const normalClass = "text-[#374151] hover:text-[#1f7a4d] transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-14 md:h-16">
      <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#1f7a4d]">
            Innovate<span className="text-[#145a32]">JB</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Services
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            About Us
          </NavLink>

          {/* CTA Button */}
          <NavLink to="/contect-us">
            <button className="bg-[#1f7a4d] hover:bg-[#145a32] text-white px-5 py-2 rounded-lg transition">
              Contact Us
            </button>
          </NavLink>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-[#1f7a4d] h-full flex items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/service" },
              { name: "Projects", path: "/project" },
              { name: "About Us", path: "/about-us" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button onClick={()=>{navigate('/contect-us');setOpen(false);}} className="mt-2 bg-[#1f7a4d] text-white py-2 rounded-lg rounded-lg">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
