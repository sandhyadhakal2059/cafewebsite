import React, { useState } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      if (err.response?.data?.message) {
        setStatus("❌ " + err.response.data.message);
      } else {
        setStatus("❌ Failed to send message");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT: CONTACT INFO */}
        <div data-aos="fade-right" className="space-y-6">
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

          {/* SOCIAL ICONS */}
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

        {/* RIGHT: CONTACT FORM */}
        <div
          data-aos="fade-left"
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>

          {status && (
            <p
              className={`mb-4 text-center font-semibold ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-secondary hover:opacity-90"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
