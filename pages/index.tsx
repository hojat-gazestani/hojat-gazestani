// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hojat Gazestani - Senior DevOps Engineer</title>
      </Head>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>👋 Hojat Gazestani</h1>
        <p><strong>Senior DevOps Engineer | Tehran, Iran</strong></p>
        <p>📧 Hojat.Gazestani@gmail.com | 📞 +98 913 863 6926</p>
        <p>🔗 <a href="https://www.linkedin.com/in/hojat-gazestani" target="_blank">LinkedIn</a> | 
            <a href="https://medium.com/@hojat-gazestani" target="_blank"> Medium</a> | 
            <a href="https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA" target="_blank"> YouTube</a></p>

        <hr />

        <h2>⚙️ Skills</h2>
        <ul>
          <li>AWS, Kubernetes, OpenStack, Python</li>
          <li>GitLab, Kustomize, Flux, ArgoCD</li>
          <li>Prometheus, Grafana, ELK, Zabbix</li>
          <li>Redis, RabbitMQ, HAproxy, Nginx</li>
          <li>Git, Pfsense, Firepower, Juniper</li>
        </ul>

        <h2>💼 Experience</h2>
        <h3>Cloud Engineer | DevOps | Kubernetes | AWS – Nethightech, Portugal (May 2023 – Present)</h3>
        <ul>
          <li>Provisioned scalable AWS infrastructure (EC2, ALB, S3, DynamoDB, CloudWatch)</li>
          <li>Deployed EKS with Terraform, cut deployment time by 60%</li>
          <li>Automated Kubernetes with Kubespray and Bash</li>
          <li>Built video/doc content for HAProxy, Django-based REST API</li>
        </ul>

        <h3>OpenStack DevOps Engineer – ArcFava (Sep 2021 – Dec 2022)</h3>
        <ul>
          <li>Deployed OpenStack + Ceph with 40% improvement in network ops</li>
          <li>Clustered Redis/RabbitMQ for high availability</li>
        </ul>

        <h3>DevOps Engineer – Mahsan (Apr 2020 – May 2021)</h3>
        <ul>
          <li>CI/CD test automation with Python</li>
          <li>Monitoring stack integration: Zabbix, Grafana, Prometheus, etc.</li>
        </ul>

        <h3>Systems Engineer – Didehbannet (2016 – 2020)</h3>
        <ul>
          <li>Disaster recovery planning, SAN + vCenter deployment for 500+ VMs</li>
          <li>Network automation with Python</li>
        </ul>

        <h2>🎓 Education</h2>
        <p>Bachelor's in Info Security – UAST (2016-2018)</p>
        <p>Associate in Software Development – Chamran College (2012-2014)</p>

        <h2>📜 Certificates</h2>
        <ul>
          <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/ABC123">AWS Cloud Solutions Architect – Coursera</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/XYZ456">DevOps on AWS – Coursera</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/123XYZ">Python for Everybody – Coursera</a></li>
        </ul>

        <h2>🌐 Languages</h2>
        <p>Persian (Native), English (Fluent), German (Basic)</p>
      </main>
    </>
  );
}

