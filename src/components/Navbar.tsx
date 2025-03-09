import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'py-3 bg-dark/90 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold text-white hover:text-accent-blue transition-colors"
        >
          Portfolio
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#short-form">Short Videos</NavLink>
          <NavLink href="#long-form">Long Videos</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button placeholder - we'll keep it simple for now */}
          <button className="text-white hover:text-accent-blue transition-colors">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="relative text-gray-300 hover:text-white transition-colors duration-300 px-1 py-2"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default Navbar;
