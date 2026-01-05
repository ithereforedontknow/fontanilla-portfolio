import { Link } from "react-router-dom";
import {
  Coffee,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Code,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-black">JULE ETHAN FONTANILLA</h3>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Full-Stack Web Developer specializing in building scalable
              applications with modern technologies like React, PHP, and MySQL.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="mailto:juleethan@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ithereforedontknow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:juleethan@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  juleethan@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+639193694589"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +63 919 369 4589
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Agoo, La Union</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Jule Ethan Fontanilla. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React & Tailwind CSS
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
