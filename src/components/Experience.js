import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Co-Founder & CTO",
            company: "Feelio",
            period: "Oct '25 - Dec '25",
            desc: "Led the development of a mood-sensing AI platform. Architected the RAG pipeline and fine-tuned models for nuanced conversation.",
            color: "border-primary"
        },
        {
            role: "AI Engineer (Consultant)",
            company: "BH Assurance",
            period: "Sep '25",
            desc: "Designed and implemented an AI insurance advisor using Agentic workflows and Graph-RAG for high-accuracy policy retrieval.",
            color: "border-secondary" 
        },
        {
            role: "AI Intern (End-of-Studies)",
            company: "Sigma Conseil",
            period: "Jan '25 - Jun '25",
            desc: "Created 'SmartCallAI', a voice-agent performing real-time sentiment analysis and intent recognition for call centers.",
            color: "border-accent"
        },
        {
            role: "Data & AI Consulting Intern",
            company: "MediaNet",
            period: "Jun '24 - Aug '24",
            desc: "Fine-tuned Llama 3 on insurance datasets, achieving a 35% accuracy increase in automated responses.",
            color: "border-info"
        }
    ];

  return (
    <section id="experience" className="py-20 bg-base-200/50">
      <div className="container mx-auto px-4 md:px-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-black tracking-tight mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:${exp.color}/30`}
                >
                    {/* Decorative Gradient Blob */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -z-0 group-hover:from-primary/10 transition-colors`} />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-base-200 p-3 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <Briefcase size={24} />
                            </div>
                            <span className="text-xs font-mono py-1 px-3 rounded-full bg-base-200 text-base-content/60 flex items-center gap-2">
                                <Calendar size={12} />
                                {exp.period}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                        <div className="font-medium text-base-content/60 mb-4">{exp.company}</div>
                        
                        <p className="text-base-content/70 text-sm leading-relaxed mt-auto">
                            {exp.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
