
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShortFormVideos from '@/components/ShortFormVideos';
import LongFormVideos from '@/components/LongFormVideos';
import Contact from '@/components/Contact';

const Index = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
            behavior: 'smooth'
          });
          // Update URL without page reload
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-dark min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <ShortFormVideos />
        <LongFormVideos />
        <Contact />
      </main>
      
      <footer className="py-8 bg-dark text-gray-500 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Video Portfolio. All rights reserved.</p>
          <p className="mt-2">Designed with attention to every detail.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
