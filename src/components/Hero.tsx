
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-gray/50 to-dark z-0" />
      
      <div className="section-container z-10 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative mb-8 sm:mb-12 overflow-hidden rounded-full w-48 h-48 sm:w-64 sm:h-64 border-4 border-white/10 shadow-2xl">
          <div className={cn(
            "absolute inset-0 bg-dark-gray/80 backdrop-blur-md z-10",
            imageLoaded ? "opacity-0" : "opacity-100"
          )} />
          
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className={cn(
              "w-full h-full object-cover opacity-0",
              imageLoaded && "animate-image-reveal"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Name & Bio */}
        <div className="text-center max-w-3xl">
          <div className="overflow-hidden mb-3">
            <h1 className="opacity-0 animate-text-reveal animation-delay-200 font-bold text-white">
              <span className="text-gradient">John Doe</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h2 className="opacity-0 animate-text-reveal animation-delay-400 text-xl md:text-2xl text-gray-300">
              Video Editor & Motion Designer
            </h2>
          </div>
          
          <div className="opacity-0 animate-fade-in-delay">
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              I create stunning visual content for brands and individuals. With over 5 years of experience in video editing and motion design, I specialize in creating engaging short-form content and cinematic long-form videos that capture attention and deliver your message effectively.
            </p>
          </div>
          
          {/* Call to action buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-delay">
            <a 
              href="#short-form" 
              className="px-6 py-3 rounded-lg bg-accent-blue text-white font-medium hover:bg-accent-blue/90 transition-all shadow-lg hover:shadow-accent-blue/20 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-transparent text-white border border-white/20 font-medium hover:bg-white/10 transition-all shadow-lg hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
};

export default Hero;
