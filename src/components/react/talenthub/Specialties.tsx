import React from "react";
import { Reveal } from "../shared/Reveal";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Shield,
  GitMerge,
} from "lucide-react";

export const Specialties = () => {
  const profiles = [
    { name: "Frontend & React", icon: Code2 },
    { name: "Backend & Node.js", icon: Database },
    { name: "Cloud & AWS", icon: Cloud },
    { name: "Mobile App Dev", icon: Smartphone },
    { name: "QA Automation", icon: Shield },
    { name: "DevOps & CI/CD", icon: GitMerge },
  ];

  return (
    <section className="pb-24 pt-12 relative z-10 w-full">
      <Reveal>
        <div className="text-center mb-10">
          <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
            PERFILES TECNOLÓGICOS
          </p>
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Los perfiles que tu equipo necesita.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-colors duration-300 cursor-default"
              >
                <Icon className="w-5 h-5 text-[#288B88]" strokeWidth={1.5} />
                <span className="text-gray-300 font-medium text-sm">
                  {profile.name}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};
