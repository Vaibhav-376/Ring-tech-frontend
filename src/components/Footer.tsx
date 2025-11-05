
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-white border-t border-pink-100 text-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
       
        <div>
          <h2 className="text-2xl font-serif font-bold text-pink-600 mb-3">
            Ring Marketing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We help brands grow through creative digital strategies, performance
            marketing, and data-driven design solutions.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-pink-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-pink-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-3">Get in Touch</h3>
          <p className="text-gray-600 mb-2">Email: hello@ringmarketing.com</p>
          <p className="text-gray-600 mb-4">Phone: +1 (555) 123-4567</p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-pink-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Ring Marketing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
