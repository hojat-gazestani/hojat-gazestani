import React from "react";
import { SectionTitleTag } from "@/components/SectionTitleTag";

interface SkillTagProps {
  text: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ text }) => {
  return (
    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
      {text}
    </span>
  );
};

export const Skills = () => {
  return (
    <>
      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap">
          {[
            "Linux",
            "AWS",
            "Kubernetes",
            "OpenStack",
            "Ceph",
            "Python",
            "Gitlab",
            "Kustomise",
            "Flux",
            "ArgoCD",
            "GitOps",
            "Prometheus",
            "Grafana",
            "ELK",
            "Zabbix",
            "Redis",
            "RabbitMQ",
            "HAproxy",
            "Nginx",
            "Git",
            "Pfsense",
            "Firepower",
            "Juniper",
          ].map((skill) => (
            <SkillTag key={skill} text={skill} />
          ))}
        </div>
      </section>
    </>
  );
};
