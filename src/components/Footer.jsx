import { FaFacebookF, FaInstagram, FaWhatsapp, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      await axios.post("http://localhost:5000/api/subscribers", { email });
      setStatus("✅ Subscribed successfully!");
      setEmail("");
    } catch (err) {
      if (err.response?.status === 409) {
        setStatus("⚠️ Already subscribed");
      } else {
        setStatus("❌ Subscription failed");
      }
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-700 py-12 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black">Sakhe Cafe</h2>
          <p>Damak Jhapa, Nepal</p>
          <p>Phone: +977 980-123-4567</p>
          <p>Email: info@sakhecafe.com</p>

          <div className="flex space-x-4 mt-2">
            <a className="icon"><FaFacebookF /></a>
            <a className="icon"><FaInstagram /></a>
            <a className="icon"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/rating" className="flex items-center gap-2 text-amber-500">
                <FaStar /> Rate & Review
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black">Subscribe</h3>
          <p className="text-gray-600">
            Get updates on latest menu and offers!
          </p>

          {status && (
            <p className="text-sm font-semibold">{status}</p>
          )}

          <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-secondary px-4 py-2 rounded-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sakhe Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;