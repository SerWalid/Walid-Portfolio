import React from 'react';
import { PlayCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Feelio: AI Ecosystem",
      role: "Co-Founder & CTO",
      period: "Oct '25",
      impact: "Best African Project (A2SV 2024)",
      desc: "Architected a responsive AI ecosystem integrating voice synthesis and RAG. Built the entire pipeline from model fine-tuning to API integration.",
      tags: ["RAG", "ElevenLabs", "FastAPI", "React Native", "ChromaDB"],
      link: "https://drive.google.com/file/d/1JvmbZ0BvHkLpqR0EloLM5iAjBnfQJd9s/view",
      color: "border-l-4 border-l-primary"
    },
    {
      title: "Autonomous Insurance Agent",
      role: "AI Consultant @ BH Assurance",
      period: "Sep '25",
      impact: "Production Deployment",
      desc: "Engineered an autonomous recommendation system utilizing Graph-RAG and QDrant. Deployed scalable ML pipelines on Azure Databricks.",
      tags: ["Graph-RAG", "QDrant", "Azure", "LangChain", "Docker"],
      link: "https://drive.google.com/file/d/1KGwWOFGQGQJnUYmhgnLGRK_c1H0zSxX2/view",
      color: "border-l-4 border-l-secondary"
    },
    {
      title: "Agentic HR Automation",
      role: "AI Engineer",
      period: "Sep '25",
      impact: "Reduced manual workload",
      desc: "Designed agentic LLM pipelines (n8n) for candidate profiling and lifecycle management. Integrated emotion analysis for video interviews.",
      tags: ["n8n", "LLM Agents", "FastAPI", "MongoDB", "PostgreSQL"],
      link: "https://drive.google.com/file/d/18GaugfpbzmNowukcHyzzr5wnewwxTqPs/view",
      color: "border-l-4 border-l-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">Selected Work</h2>
            <p className="text-base-content/60">High-impact systems deployed in startup and verified enterprise environments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`card bg-base-200 hover:bg-base-300 transition-all duration-300 group ${project.color}`}>
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                    <span className="badge badge-primary badge-outline text-xs font-bold">{project.impact}</span>
                    <span className="text-xs text-base-content/40 font-mono">{project.period}</span>
                </div>
                
                <h3 className="card-title text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-base-content/70 mb-4">{project.role}</p>
                <p className="text-base-content/80 mb-6 flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge badge-sm bg-base-100 border-none text-base-content/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end mt-auto">
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-ghost gap-2 group-hover:translate-x-1 transition-transform">
                        View Demo <PlayCircle size={14} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
