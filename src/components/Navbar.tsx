import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
    { label: 'Philosophy', href: '/philosophy', id: 'philosophy' },
    { label: 'Studio', href: '/studio', id: 'studio' },
    { label: 'Insights', href: '/insights', id: 'insights' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    
    // If we're on the landing page and click a hash link, scroll smoothly
    if (location.pathname === '/' && id !== 'philosophy' && id !== 'studio' && id !== 'insights' && id !== 'contact') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isPhilosophyActive = location.pathname === '/philosophy';
  const isStudioActive = location.pathname === '/studio';
  const isInsightsActive = location.pathname === '/insights';
  const isContactActive = location.pathname === '/contact';
  const isInquireActive = location.pathname === '/inquire';
  const isWhiteBgRequired = isScrolled || isPhilosophyActive || isStudioActive || isInsightsActive || isContactActive || isInquireActive;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteBgRequired
          ? 'bg-[#F8F7F4] border-b border-[#E8E8E8] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
            isWhiteBgRequired ? 'text-[#111111]' : 'text-white'
          }`}
        >
          Groundwork
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => {
            const isActive = 
              (item.id === 'philosophy' && isPhilosophyActive) ||
              (item.id === 'studio' && isStudioActive) ||
              (item.id === 'insights' && isInsightsActive) ||
              (item.id === 'contact' && isContactActive);
            const isDarkText = isWhiteBgRequired;
            
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 py-1 hover:opacity-75 ${
                  isDarkText ? 'text-[#111111]' : 'text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#111111] animate-fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side Inquire button */}
        <div className="hidden md:block">
          <Link
            to="/inquire"
            className={`relative inline-block font-mono text-xs uppercase tracking-widest font-semibold px-6 py-3 border transition-all duration-300 ${
              isWhiteBgRequired
                ? 'bg-[#111111] text-white border-[#111111] hover:bg-transparent hover:text-[#111111]'
                : 'bg-white text-[#111111] border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Inquire
            {isInquireActive && (
              <span className="absolute bottom-1.5 left-6 right-6 h-[1.5px] bg-white mix-blend-difference animate-fade-in" />
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-300 focus:outline-none ${
              isWhiteBgRequired ? 'text-[#111111]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#F8F7F4] z-40 flex flex-col justify-between p-8 border-t border-[#E8E8E8]">
          <div className="flex flex-col space-y-6 pt-8">
            {navItems.map((item) => {
              const isActive = 
                (item.id === 'philosophy' && isPhilosophyActive) ||
                (item.id === 'studio' && isStudioActive) ||
                (item.id === 'insights' && isInsightsActive) ||
                (item.id === 'contact' && isContactActive);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className="relative font-mono text-lg uppercase tracking-wider font-semibold text-[#111111] hover:opacity-75 flex items-center"
                >
                  {item.label}
                  {isActive && (
                    <span className="ml-3 w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="pb-12">
            <Link
              to="/inquire"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative block text-center font-mono text-xs uppercase tracking-widest font-semibold px-6 py-4 bg-[#111111] text-white border border-[#111111] hover:bg-transparent hover:text-[#111111] transition-all duration-300"
            >
              Inquire
              {isInquireActive && (
                <span className="absolute bottom-2 left-[40%] right-[40%] h-[1.5px] bg-white" />
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
