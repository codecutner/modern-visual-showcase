
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, SendIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isHovered, setIsHovered] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Here you would typically send the form data to your backend or email service
    alert("Demo request sent! I'll get back to you soon.");
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <AnimatedSection id="contact" className="py-24 bg-dark">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-accent-blue font-medium mb-3 tracking-wider text-sm uppercase">Ready to collaborate?</p>
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Not satisfied? Looking for a specific editing style? No problem! Email or text me, and I'll create a free demo sample based on what you're looking for!
            </p>
          </div>
          
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email card */}
            <a 
              href="mailto:contact@example.com" 
              className={cn(
                "glass-card rounded-xl p-6 flex items-center space-x-4 transition-all duration-300 hover:bg-dark-gray/90",
                "border border-gray-800 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/5"
              )}
            >
              <div className="rounded-full bg-accent-blue/10 p-3">
                <Mail className="h-6 w-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-medium text-white">Email Me</h3>
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </a>
            
            {/* Phone card */}
            <a 
              href="tel:+11234567890" 
              className={cn(
                "glass-card rounded-xl p-6 flex items-center space-x-4 transition-all duration-300 hover:bg-dark-gray/90",
                "border border-gray-800 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/5"
              )}
            >
              <div className="rounded-full bg-accent-blue/10 p-3">
                <Phone className="h-6 w-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-medium text-white">Call or Text</h3>
                <p className="text-gray-400">+1 (123) 456-7890</p>
              </div>
            </a>
          </div>
          
          {/* Contact form */}
          <div className="glass-card rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Request a Demo</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                
                {/* Message textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell me what you need
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                    placeholder="Describe the style, length, and purpose of the video you need..."
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={cn(
                      "w-full py-3 px-4 flex items-center justify-center space-x-2 rounded-lg transition-all duration-300 text-white font-medium",
                      "bg-accent-blue hover:bg-accent-blue/90 shadow-lg hover:shadow-accent-blue/20",
                      "transform hover:-translate-y-1"
                    )}
                  >
                    <span>Request a Demo</span>
                    <SendIcon className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isHovered ? "translate-x-1" : ""
                    )} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
