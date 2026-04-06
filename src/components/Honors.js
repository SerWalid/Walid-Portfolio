import React from 'react';
import { Award, Star } from 'lucide-react';

const Honors = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-50"></div>
                 <div className="relative bg-base-200 border border-base-content/5 rounded-2xl p-8 card-body">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Award className="text-primary" /> Key Achievements
                    </h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-none pt-1">
                                <div className="badge badge-primary">1st Prize</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">A2SV African AI Hackathon 2024</h4>
                                <p className="text-sm opacity-70">Secured top honors at the largest AI hackathon in Africa.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none pt-1">
                                <div className="badge badge-secondary">1st Prize</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">NextBH Hackathon 2025</h4>
                                <p className="text-sm opacity-70">BH Assurance Innovation Challenge.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none pt-1">
                                <span className="text-yellow-500"><Star size={20} fill="currentColor"/></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">3.67 / 4.0 GPA</h4>
                                <p className="text-sm opacity-70">Engineering Degree in AI, ESPRIT.</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="pl-0 md:pl-10">
                <h2 className="text-4xl font-extrabold mb-6">Proven Excellence</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                    Beyond code, I compete and deliver. My work has been recognized on international stages for its innovation and immediate utility.
                </p>
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 w-full">
                    <div className="stat place-items-center">
                        <div className="stat-title">Hackathon Wins</div>
                        <div className="stat-value text-primary">2</div>
                        <div className="stat-desc">International & National</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-title">Certifications</div>
                        <div className="stat-value text-secondary">30+</div>
                        <div className="stat-desc">DeepLearning.AI & Coursera</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-title">Projects Delivered</div>
                        <div className="stat-value">5+</div>
                        <div className="stat-desc">Production Grade Systems</div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Honors;
