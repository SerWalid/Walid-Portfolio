import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-base-300 text-base-content py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-base-content mb-6">Ready to scale your AI infrastructure?</h2>
        <p className="mb-8 max-w-lg opacity-70">
            Currently open to roles in AI Engineering, Multi-Agent Systems, and LLM Ops.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a href="mailto:walidjlassi739@gmail.com" className="btn h-12 px-6 rounded-full bg-base-100 border-base-content/10 shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all group/btn">
                <Mail size={18} className="group-hover/btn:scale-110 transition-transform"/> 
                <span>walidjlassi739@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/walid-jlassi" target="_blank" rel="noreferrer" className="btn h-12 px-6 rounded-full bg-base-100 border-base-content/10 shadow-sm hover:shadow-md hover:border-blue-600 hover:text-blue-600 transition-all group/btn">
                <Linkedin size={18} className="group-hover/btn:scale-110 transition-transform"/> 
                <span>LinkedIn</span>
            </a>
            <a href="tel:+21625520544" className="btn h-12 px-6 rounded-full bg-base-100 border-base-content/10 shadow-sm hover:shadow-md hover:border-green-500 hover:text-green-500 transition-all group/btn">
                <Phone size={18} className="group-hover/btn:scale-110 transition-transform"/> 
                <span>+216 25 520 544</span>
            </a>
        </div>

        <div className="divider opacity-10"></div>
        
        <p className="text-sm opacity-50">
          © {new Date().getFullYear()} Walid Jlassi. Architected with React & DaisyUI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
