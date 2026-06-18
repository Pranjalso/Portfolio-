// ContactSection.jsx
import React, { useState, useRef } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaTelegramPlane, FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: null, // 'success', 'error', 'loading'
    message: "",
  });

  // ============================================
  // 📌 YOUR EMAILJS CREDENTIALS
  // ============================================
  const EMAILJS_SERVICE_ID = "service_9xgtlp4";
  const EMAILJS_TEMPLATE_ID = "template_qkh2oq5";
  const EMAILJS_PUBLIC_KEY = "z2TJ2217wGGDs6-tQ";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      return;
    }

    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-3 sm:px-4 py-1.5 rounded-full mb-4">
            <AiFillMail className="text-indigo-400 text-[11px] sm:text-sm" />
            <span className="text-indigo-400 text-[10px] sm:text-xs font-medium tracking-wider uppercase">Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 sm:mt-4 text-xs sm:text-sm">
            Have a project in mind? I'd love to hear from you. Send me a message and I'll respond within 24 hours.
          </p>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full mx-auto mt-3 sm:mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:w-2/5 space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all duration-300">
                    <AiFillMail className="text-indigo-400 text-base sm:text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-[10px] sm:text-xs">Email</p>
                    <a
                      href="mailto:pranjalsoni.engineer@gmail.com"
                      className="text-gray-300 text-[11px] sm:text-sm hover:text-indigo-400 transition-colors duration-300 break-all"
                    >
                      pranjalsoni.engineer@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Connect With Me</h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                  href="https://github.com/Pranjalso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-500 hover:text-white transition-all duration-300 hover:scale-110 group"
                >
                  <AiFillGithub className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjalsoni-mernstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-500 hover:text-white transition-all duration-300 hover:scale-110 group"
                >
                  <AiFillLinkedin className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://leetcode.com/u/Pranjalso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-500 hover:text-white transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.824.662l2.697 2.606c.514.515 1.365.515 1.88 0s.515-1.365 0-1.88l-2.697-2.607c-.934-.934-2.109-1.398-3.343-1.398s-2.409.464-3.343 1.398l-4.332 4.363c-.934.934-1.398 2.109-1.398 3.343s.464 2.409 1.398 3.343l4.332 4.363c.934.934 2.109 1.398 3.343 1.398s2.409-.464 3.343-1.398l2.697-2.607c.515-.515.515-1.365 0-1.88s-1.365-.515-1.88 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-emerald-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-500"></span>
                </div>
                <span className="text-emerald-400 text-[11px] sm:text-sm font-medium">Available for Work</span>
              </div>
              <p className="text-gray-400 text-[11px] sm:text-sm">
                I'm currently available for freelance projects, internships, and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="lg:w-3/5"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Send a Message</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {/* Name Field */}
              <div className="mb-4 sm:mb-5">
                <label htmlFor="name" className="block text-gray-400 text-[11px] sm:text-sm mb-1.5 sm:mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-900/50 px-3 sm:px-4 py-2.5 sm:py-3 outline-none border border-gray-700 focus:border-indigo-500 rounded-xl text-gray-300 text-xs sm:text-sm transition-all duration-300 focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4 sm:mb-5">
                <label htmlFor="email" className="block text-gray-400 text-[11px] sm:text-sm mb-1.5 sm:mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-900/50 px-3 sm:px-4 py-2.5 sm:py-3 outline-none border border-gray-700 focus:border-indigo-500 rounded-xl text-gray-300 text-xs sm:text-sm transition-all duration-300 focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-5 sm:mb-6">
                <label htmlFor="message" className="block text-gray-400 text-[11px] sm:text-sm mb-1.5 sm:mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4 sm:rows-5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full bg-gray-900/50 px-3 sm:px-4 py-2.5 sm:py-3 outline-none border border-gray-700 focus:border-indigo-500 rounded-xl text-gray-300 text-xs sm:text-sm transition-all duration-300 focus:ring-1 focus:ring-indigo-500 resize-none"
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-4 sm:mb-5 p-2.5 sm:p-3 rounded-xl flex items-center gap-2 text-[11px] sm:text-sm ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      : status.type === "error"
                      ? "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                      : "bg-indigo-500/10 border border-indigo-500/30 text-indigo-400"
                  }`}
                >
                  {status.type === "success" && <FaCheckCircle className="text-xs sm:text-sm" />}
                  {status.type === "error" && <FaTimesCircle className="text-xs sm:text-sm" />}
                  {status.type === "loading" && <FaSpinner className="animate-spin text-xs sm:text-sm" />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="group relative w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl text-white font-medium text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status.type === "loading" ? (
                    <>
                      <FaSpinner className="animate-spin text-xs sm:text-sm" />
                      <span className="text-xs sm:text-sm">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaTelegramPlane className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                      <span className="text-xs sm:text-sm">Send Message</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;