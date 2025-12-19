import { NavLink } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const linkClass = "text-gray-400 hover:text-[#1f7a4d] transition";

  return (
    <footer className="bg-[#0f172a] text-white mt-auto">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* ===== Brand ===== */}
        <div>
          <h2 className="text-2xl font-bold text-[#1f7a4d] mb-4">
            Innovate<span className="text-[#22c55e]">JB</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Delivering secure, scalable, and modern digital solutions
            for businesses worldwide.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to="/" className={linkClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/service" className={linkClass}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/project" className={linkClass}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contect-us" className={linkClass}>Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* ===== Services ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Website Development</li>
            <li>E-commerce Solutions</li>
            <li>Custom Web Applications</li>
            <li>Backend API Development</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FiMail className="text-[#1f7a4d]" />
              <a href="mailto:jayparmar2787@gmail.com" className="hover:text-[#1f7a4d]">
                jayparmar2787@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FiPhone className="text-[#1f7a4d]" />
              <span>+91 XXXXX XXXXX</span>
            </li>

            <li className="flex items-center gap-3">
              <FiMapPin className="text-[#1f7a4d]" />
              <span>India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-gray-700 py-3 text-center text-gray-400 text-sm m-0">
        © {new Date().getFullYear()} InnovateJB. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
