import React from 'react';
import { Cpu, Database, Cloud, Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: ["Multi-Agent Systems", "RAG Pipelines", "LLMs", "Deep Learning", "NLP", "Computer Vision"]
    },
    {
      title: "Backend & Frameworks",
      icon: <Code className="w-6 h-6 text-secondary" />,
      skills: ["FastAPI", "Django", "Flask", "LangChain", "TensorFlow", "PyTorch"]
    },
    {
      title: "Infrastructure & Data",
      icon: <Database className="w-6 h-6 text-accent" />,
      skills: ["PostgreSQL", "MongoDB", "ChromaDB", "QDrant", "Vector Search", "Azure Databricks"]
    },
    {
      title: "Integrations & Tools",
      icon: <Cloud className="w-6 h-6 text-info" />,
      skills: ["Docker", "MLflow", "Twilio", "ElevenLabs", "WhatsApp API", "n8n"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-base-content/60 max-w-2xl mx-auto">
            A comprehensive stack focused on building end-to-end intelligent systems, from model fine-tuning to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl border border-base-content/5 hover:border-primary/50 transition-colors">
              <div className="card-body p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-base-200 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="badge badge-outline badge-sm py-3 px-3 hover:bg-base-200 cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
