import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About / Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black">Sakhe Cafe</h2>
          <p>Damak Jhapa, Nepal</p>
          <p>Phone: +977 980-123-4567</p>
          <p>Email: info@sakhecafe.com</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 border border-gray-300 p-3 rounded-full transition hover:bg-primary hover:text-white hover:border-primary"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 border border-gray-300 p-3 rounded-full transition hover:bg-primary hover:text-white hover:border-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9779801234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 border border-gray-300 p-3 rounded-full transition hover:bg-primary hover:text-white hover:border-primary"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black">Quick Links</h3>
          <ul className="space-y-2">
  <li>
    <Link to="/" className="hover:text-primary transition">
      Home
    </Link>
  </li>
  <li>
    <Link to="/about" className="hover:text-primary transition">
      About
    </Link>
  </li>
  <li>
    <Link to="/menu" className="hover:text-primary transition">
      Menu
    </Link>
  </li>
  <li>
    <Link to="/contact" className="hover:text-primary transition">
      Contact
    </Link>
  </li>

  {/* ⭐ Rating Link */}
  <li>
    <Link
      to="/rating"
      className="
        flex items-center gap-2
        text-amber-500
        hover:text-amber-600
        transition
      "
    >
      <FaStar className="text-sm" />
      Rate & Review
    </Link>
  </li>
</ul>

        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black">Subscribe</h3>
          <p className="text-gray-600">
            Get updates on latest menu and offers!
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-secondary px-4 py-2 rounded-md text-white hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sakhe Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;