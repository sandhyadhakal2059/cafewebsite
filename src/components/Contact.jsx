// src/components/Contact.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Contact Info */}
        <div
          data-aos="fade-right"
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Reach out to us for reservations,
            inquiries, or just to say hello.
          </p>

          <div className="space-y-4 text-gray-700 text-lg">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>Damak, Jhapa, Nepal</p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+977 980-123-4567</p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p>info@sakhecafe.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/9779801234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          data-aos="fade-left"
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;