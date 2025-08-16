import { ExperienceItem } from "@/components/ExperienceItem";
import { SectionTitleTag } from "@/components/SectionTitleTag";
import { CertificateItem } from "@/components/CertificateItem";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/SkillTag";
import { Contact } from "@/components/Contact";
import Link from "next/link";
import { blogPost } from "./blog";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">Hojat Gazestani</h1>
        <p className="text-lg text-gray-600">Senior DevOps Engineer</p>
      </header>

      {/* Personal Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Location:</strong> Tehran, Iran
          </li>
          <li>
            <strong>Phone:</strong> (+98)913 863 6926
          </li>
          <li>
            <strong>Email:</strong> Hojat.Gazestani@gmail.com
          </li>
          <li>
            <strong>GitHub:</strong> hojat-gazestani
          </li>
          <li>
            <strong>Medium:</strong> hojat-gazestani
          </li>
        </ul>
      </section>

      <AboutMe />

      <Skills />

      <SectionTitleTag text="Experience" />
      <div className="flex flex-wrap mb-6">
        <ExperienceItem text="Linux System Admin" />
        <ExperienceItem text="On-Prem Kubernetes DR" />
        <ExperienceItem text="Multisite Ceph RGW" />
      </div>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">
              Cloud Engineer | DevOps | Kubernetes | AWS
            </h3>
            <p className="text-sm text-gray-600">
              Nethightech Company, Portugal — May 2023 – Present
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>
                Developed scalable services on AWS (EC2, ELB, S3, DynamoDB,
                CloudWatch).
              </li>
              <li>Provisioned AWS EKS clusters with Terraform.</li>
              <li>
                Deployed Kubernetes with Kubespray and optimized with Bash.
              </li>
              <li>Created HAProxy training content (GitHub, YouTube).</li>
              <li>Automated deployments using GitLab, Kustomize, Flux.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">OpenStack DevOps Engineer</h3>
            <p className="text-sm text-gray-600">
              ArcFava — Sep 2021 – Dec 2022
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Built infra using OpenStack and Ceph.</li>
              <li>Scaled Redis and RabbitMQ to clustered environments.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">DevOps Engineer</h3>
            <p className="text-sm text-gray-600">
              Mahsan — Apr 2020 - May 2021
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Refined CI/CD pipelines with Python unit tests.</li>
              <li>Integrated Zabbix, Grafana, Prometheus, etc.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Systems Engineer</h3>
            <p className="text-sm text-gray-600">
              Didehbannet — Jul 2016 – Apr 2020
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Led disaster recovery site planning with VMware SRM.</li>
              <li>
                Upgraded firewall and network security (Juniper, FortiGate).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Bachelor:</strong> Info Security, UAST, 2016 - 2018
          </li>
          <li>
            <strong>Associate:</strong> Software Dev, Chamran College, 2012 -
            2014
          </li>
        </ul>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <p className="text-gray-700">Persian, English, German</p>
      </section>

      {/* Online Content */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Online Content</h2>
        <p className="text-gray-700 mb-2">
          YouTube:{" "}
          <a
            href="https://www.youtube.com/@hojatgazestani7142"
            className="text-blue-600 underline"
          >
            hojatgazestani7142
          </a>
        </p>
        <p className="text-gray-700">
          Topics: OpenStack, Ceph, Kubernetes, RabbitMQ, HAProxy, Puppet,
          Vagrant, LPIC3, SRM, Layer 2 Security
        </p>
      </section>

      {/* Certificates */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <a href="#" className="text-blue-600 underline">
              AWS Cloud Solutions Architect (Coursera)
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              DevOps on AWS (Coursera)
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Python for Everybody (Coursera)
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Google Cloud Fundamentals (Coursera)
            </a>
          </li>
          <li>
            VMware (VCP, NSX, SRM), CCNA/CCNP, MTCNA, LPIC3, PWK, ISMS, EMC
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Recent Articles  */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPost.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
