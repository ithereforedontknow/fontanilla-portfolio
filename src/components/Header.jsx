import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Header() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Auto-hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown =
        window.scrollY > lastScrollY && window.scrollY > 50;

      if (isScrollingDown) {
        setShowNavbar(false);
        setShowMobileMenu(false);
      } else if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-gray-200 transition-transform duration-300 ease-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Name */}
            <Link to="/" className="flex items-center select-none group z-50">
              <span className="text-xl md:text-2xl font-black text-black tracking-tight group-hover:text-gray-700 transition-colors duration-200">
                JULE ETHAN FONTANILLA
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 z-50 relative"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay - Only renders when open */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-white animate-in fade-in slide-in-from-right duration-300">
          <div className="h-full overflow-y-auto px-6 pt-28 pb-8">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setShowMobileMenu(false)}
                  className={`block px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-200 animate-in slide-in-from-right ${
                    location.pathname === item.href
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Info in Mobile Menu */}
            <div
              className="mt-12 p-6 bg-gray-50 rounded-2xl animate-in slide-in-from-right"
              style={{ animationDelay: `${navItems.length * 100 + 200}ms` }}
            >
              <h4 className="text-sm font-semibold text-gray-500 mb-2">
                Contact
              </h4>
              <p className="text-black font-medium">juleethan@gmail.com</p>
              <p className="text-black font-medium">+639193694589</p>
              <p className="text-gray-600 text-sm mt-2">📍 Agoo, La Union</p>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20" />
    </>
  );
}

export default Header;
