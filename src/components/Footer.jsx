import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Website Name */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
              alt="HomeNest Logo"
              className="w-10 h-10"
            />
            <h2 className="text-2xl font-bold text-white">HomeNest</h2>
          </div>
          <p className="text-sm leading-relaxed">
            HomeNest – A Real Estate Listing Portal where you can buy, sell,
            or rent your dream property with ease and trust.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-orange-400" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-orange-400" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-orange-400" />
              <span>support@homenest.com</span>
            </li>
          </ul>
        </div>

        {/* Terms & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a href="/terms" className="hover:text-orange-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} <span className="text-orange-400 font-semibold">HomeNest</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
