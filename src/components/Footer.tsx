import React, { useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const isStudioPage = location.pathname === '/studio';
  const isInsightsPage = location.pathname === '/insights';
  const isContactPage = location.pathname === '/contact';
  const isInquirePage = location.pathname === '/inquire';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  // Render the Inquire page footer variant
  if (isInquirePage) {
    return (
      <footer className="w-full bg-[#F8F7F4] pt-24 pb-16 border-t border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Main columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16 text-left items-start">
            
            {/* Column 1: GROUNDWORK */}
            <div className="flex flex-col md:col-span-2">
              <h2 className="font-serif text-3xl text-[#111111] tracking-tight mb-4">
                GROUNDWORK
              </h2>
              <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed max-w-[320px]">
                Building silent monuments for meaningful living.
              </p>
            </div>

            {/* Column 2: CONNECT */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                CONNECT
              </h4>
              <div className="flex flex-col space-y-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Column 3: STUDIO */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                STUDIO
              </h4>
              <div className="flex flex-col space-y-3">
                <Link to="/insights" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Journal
                </Link>
                <Link to="/#careers" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Careers
                </Link>
                <Link to="/#privacy" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Privacy
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom aligned row */}
          <div className="border-t border-[#E8E8E8]/50 pt-8 flex items-center justify-end">
            <span className="font-mono text-[10px] tracking-wider text-[#6B6B6B]">
              © {new Date().getFullYear()} GROUNDWORK ARCHITECTS. ALL RIGHTS RESERVED.
            </span>
          </div>

        </div>
      </footer>
    );
  }

  // Render the 3-column footer on /studio as requested by the Studio specs
  if (isStudioPage) {
    return (
      <footer className="w-full bg-[#F8F7F4] pt-24 pb-16 border-t border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* 3-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-20 text-left items-start">
            
            {/* Column 1: Groundwork + Copyright */}
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl text-[#111111] tracking-tight mb-4">
                Groundwork
              </h2>
              <span className="font-sans text-xs text-[#6E6E6E] mt-2">
                © {new Date().getFullYear()} Groundwork Studio. All rights reserved.
              </span>
            </div>

            {/* Column 2: SOCIAL -> Instagram, LinkedIn */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                SOCIAL
              </h4>
              <div className="flex flex-col space-y-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Column 3: STUDIO -> Journal, Privacy Policy */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                STUDIO
              </h4>
              <div className="flex flex-col space-y-3">
                <Link to="/#journal" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Journal
                </Link>
                <Link to="/#privacy" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </div>
            </div>

          </div>

        </div>
      </footer>
    );
  }

  // Render the specific 4-column footer on /insights as requested by the Insights specs
  if (isInsightsPage) {
    return (
      <footer className="w-full bg-[#F8F7F4] pt-24 pb-12 border-t border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* 4-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-left items-start">
            
            {/* Column 1: Groundwork Logo + Description */}
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl text-[#111111] tracking-tight mb-4">
                Groundwork
              </h2>
              <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed max-w-[260px]">
                Crafting thoughtful spaces with an emphasis on clarity, order, and raw material integrity.
              </p>
            </div>

            {/* Column 2: Studio -> Portfolio, Philosophy, Process */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                Studio
              </h4>
              <div className="flex flex-col space-y-3">
                <Link to="/#portfolio" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Portfolio
                </Link>
                <Link to="/philosophy" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Philosophy
                </Link>
                <Link to="/studio" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Process
                </Link>
              </div>
            </div>

            {/* Column 3: Connect -> Instagram, LinkedIn, Journal */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                Connect
              </h4>
              <div className="flex flex-col space-y-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  LinkedIn
                </a>
                <Link to="/insights" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                  Journal
                </Link>
              </div>
            </div>

            {/* Column 4: New Project Inquiries -> studio@groundwork.arch */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                New Project Inquiries
              </h4>
              <a href="mailto:studio@groundwork.arch" className="font-sans text-sm font-semibold text-[#111111] hover:opacity-75 transition-opacity">
                studio@groundwork.arch
              </a>
            </div>

          </div>

          {/* Bottom copyright row with a top border */}
          <div className="border-t border-[#E8E8E8] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-sans text-xs text-[#6E6E6E] order-2 md:order-1">
              © {new Date().getFullYear()} Groundwork Studio. All rights reserved.
            </span>
            <div className="flex items-center space-x-6 order-1 md:order-2">
              <Link to="/#privacy" className="font-sans text-xs text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </footer>
    );
  }

  // Render the specific 4-column footer on /contact as requested by the Contact specs
  if (isContactPage) {
    return (
      <footer className="w-full bg-[#F8F7F4] pt-24 pb-12 border-t border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* 4-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-left items-start">
            
            {/* Column 1: GROUNDWORK Brand Info */}
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl text-[#111111] tracking-tight mb-4">
                GROUNDWORK
              </h2>
              <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed max-w-[260px]">
                Architecture that respects context, celebrates materiality, and endures through time.
              </p>
            </div>

            {/* Column 2: SITEMAP */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                SITEMAP
              </h4>
              <div className="flex flex-col space-y-3">
                <Link to="/#portfolio" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Portfolio
                </Link>
                <Link to="/philosophy" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Philosophy
                </Link>
                <Link to="/studio" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Studio
                </Link>
                <Link to="/insights" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Journal
                </Link>
              </div>
            </div>

            {/* Column 3: SOCIAL */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                SOCIAL
              </h4>
              <div className="flex flex-col space-y-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  LinkedIn
                </a>
                <Link to="/#careers" className="font-sans text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  Careers
                </Link>
              </div>
            </div>

            {/* Column 4: New Project Inquiries */}
            <div className="flex flex-col">
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
                New Project Inquiries
              </h4>
              <a href="mailto:studio@groundwork.arch" className="font-sans text-sm font-semibold text-[#111111] hover:opacity-75 transition-opacity">
                studio@groundwork.arch
              </a>
            </div>

          </div>

          {/* Bottom copyright row with a top border */}
          <div className="border-t border-[#E8E8E8] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-sans text-xs text-[#6E6E6E] order-2 md:order-1">
              © 2026 GROUNDWORK ARCHITECTS. ALL RIGHTS RESERVED.
            </span>
            <div className="flex items-center space-x-6 order-1 md:order-2">
              <Link to="/#privacy" className="font-sans text-xs text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/#terms" className="font-sans text-xs text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Terms
              </Link>
            </div>
          </div>

        </div>
      </footer>
    );
  }

  // Default 4-column footer for all other pages (Homepage, Philosophy, etc.)
  return (
    <footer className="w-full bg-[#F8F7F4] pt-24 pb-12 border-t border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl text-[#111111] tracking-tight mb-4">
              Groundwork
            </h2>
            <p className="font-sans text-sm text-[#6E6E6E] leading-relaxed max-w-[260px]">
              Crafting thoughtful spaces with an emphasis on clarity, order, and raw material integrity.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
              Navigation
            </h4>
            <div className="flex flex-col space-y-3">
              <Link to="/#portfolio" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Portfolio
              </Link>
              <Link to="/philosophy" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Philosophy
              </Link>
              <Link to="/studio" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Studio
              </Link>
              <Link to="/#insights" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Insights
              </Link>
            </div>
          </div>

          {/* Column 3: Connect Links */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#journal" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Journal
              </a>
              <a href="#privacy" className="font-sans text-sm text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
              Subscribe
            </h4>
            <p className="font-sans text-xs text-[#6E6E6E] mb-4">
              Sign up to receive updates on our latest projects.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-[#111111] pb-2 max-w-[280px]">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent font-mono text-[10px] tracking-wider text-[#111111] placeholder-[#6E6E6E] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-[#111111] hover:opacity-75 transition-opacity duration-300 ml-2"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright row with a top border */}
        <div className="border-t border-[#E8E8E8] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-[#6E6E6E] order-2 md:order-1">
            © {new Date().getFullYear()} Groundwork Studio. All rights reserved.
          </span>
          <div className="flex items-center space-x-2 text-[#6E6E6E] order-1 md:order-2">
            <Globe size={14} className="text-[#6E6E6E]" />
            <span className="font-sans text-xs tracking-wider font-semibold text-[#111111] uppercase">
              Global Studio
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
