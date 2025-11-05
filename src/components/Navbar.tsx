"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type DropdownItems = {
  [key: string]: { label: string; href: string }[];
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string>("");

  const dropdownItems: DropdownItems = {
    Services: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "SEO", href: "/services/seo" },
      { label: "Digital Marketing Strategy", href: "/services/digital-marketing-strategy" },
      { label: "Lead Generation Agency", href: "/services/lead-generation-agency" },
      { label: "Video Marketing", href: "/services/video-marketing" },
    ],
    Industry: [
      { label: "Healthcare", href: "/industry/healthcare" },
      { label: "Finance", href: "/industry/finance" },
      { label: "E-commerce", href: "/industry/ecommerce" },
      { label: "Education", href: "/industry/education" },
    ],
    HubSpot: [
      { label: "CRM Setup", href: "/hubspot/crm-setup" },
      { label: "Automation", href: "/hubspot/automation" },
      { label: "Analytics", href: "/hubspot/analytics" },
      { label: "Integrations", href: "/hubspot/integrations" },
    ],
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  return (
    <div className="w-full bg-linear-to-r from-pink-300 to-pink-400 py-5 px-6 md:px-10 rounded-2xl shadow-xl relative z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center text-white">
        
        <a href="/" className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-wider hover:opacity-90 transition-all">Ring Tech</h1>
        </a>

        
        <ul className="hidden md:flex gap-8 items-center text-[17px] font-medium">
          {Object.keys(dropdownItems).map((menu) => (
            <li key={menu} className="relative group">
              <button
                onClick={() => toggleDropdown(menu)}
                className="flex items-center gap-1 hover:text-[#FFD580] transition-all duration-200"
              >
                {menu}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openDropdown === menu ? "rotate-180" : ""
                  }`}
                />
              </button>

             
              {openDropdown === menu && (
                <ul className="absolute left-0 top-8 flex flex-col bg-[#1E1E1E]/90 backdrop-blur-xl rounded-xl py-3 w-60 shadow-lg border border-white/10 animate-fadeIn">
                  {dropdownItems[menu].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-5 py-2.5 text-sm hover:bg-pink-300 hover:text-black rounded-lg transition-all duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li><a href="/about" className="hover:text-[#FFD580] transition-all">About Us</a></li>
          <li><a href="/work" className="hover:text-[#FFD580] transition-all">Our Work</a></li>
          <li><a href="/ai-lab" className="hover:text-[#FFD580] transition-all">AI Lab</a></li>
          <li><a href="/contact" className="hover:text-[#FFD580] transition-all">Contact</a></li>
        </ul>

      
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="hidden md:block bg-white text-[#4B1FCB] px-6 py-2 rounded-full font-semibold hover:bg-[#FFD580] hover:text-black transition-all"
          >
            Speak to Us
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

     
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#1E1E1E]/70 rounded-xl backdrop-blur-md shadow-xl border border-white/10 animate-slideDown">
          <ul className="flex flex-col items-center gap-3 py-4 text-white text-[17px]">
            {Object.keys(dropdownItems).map((menu) => (
              <li key={menu} className="w-full text-center">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex justify-center items-center gap-1 w-full hover:text-[#FFD580] transition-all"
                >
                  {menu}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openDropdown === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === menu && (
                  <ul className="flex flex-col gap-2 mt-2 bg-[#2C2C2C]/70 rounded-lg mx-8 py-2 shadow-lg border border-white/10">
                    {dropdownItems[menu].map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block py-2 hover:bg-white/10 rounded-md text-sm transition-all"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li><a href="/about" className="hover:text-[#FFD580] transition-all">About Us</a></li>
            <li><a href="/work" className="hover:text-[#FFD580] transition-all">Our Work</a></li>
            <li><a href="/ai-lab" className="hover:text-[#FFD580] transition-all">AI Lab</a></li>
            <li><a href="/contact" className="hover:text-[#FFD580] transition-all">Contact</a></li>
            <a
              href="/contact"
              className="bg-white text-[#4B1FCB] px-6 py-2 rounded-full font-semibold mt-2 hover:bg-[#FFD580] transition-all"
            >
              Speak to Us
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
