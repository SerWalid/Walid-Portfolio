import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="hero-content flex-col lg:flex-row-reverse z-10 gap-10 md:gap-16">
        
        {/* Image Section */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full rounded-tl-[40%] rounded-br-[40%] overflow-hidden border-4 border-primary/20 shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)] rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img src="/profile.jpg" alt="Walid Jlassi" className="w-full h-full object-cover scale-110" />
            </div>
            
             {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:bottom-4 md:-left-10 bg-base-100/90 backdrop-blur rounded-xl p-4 border border-primary/30 shadow-2xl">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">🚀</div>
                  <div>
                    <div className="text-xs opacity-50 font-mono">Current Focus</div>
                    <div className="font-bold text-sm">Agentic Systems</div>
                  </div>
               </div>
            </div>
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge badge-outline badge-lg mb-6 text-primary border-primary/50 gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Opportunities
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6"
          >
            Architecting <br />
            <span className="text-gradient">Autonomous AI</span> Systems
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-lg md:text-xl text-base-content/70 max-w-2xl"
          >
           Engineered scalable <b>Agentic Workflows</b>, <b>RAG Pipelines</b>, and enterprise-grade <b>LLM Solutions</b>.
           Building the bridge between cutting-edge research and deployment.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-8"
          >
            <a href="#projects" className="btn btn-primary rounded-full px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              View Work <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-3">
              
              <a href="https://linkedin.com/in/walid-jlassi" target="_blank" rel="noreferrer" className="btn btn-circle btn-outline border-base-content/20 hover:bg-base-content/10 hover:border-base-content/40" title="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
