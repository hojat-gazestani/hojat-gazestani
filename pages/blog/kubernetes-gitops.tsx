import { NextPage } from 'next';
import Head from 'next/head';

const KubernetesGitOps: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Implementing GitOps with Kubernetes | Hojat Gazestani</title>
        <meta name="description" content="Guide to setting up GitOps workflows using Flux/ArgoCD" />
      </Head>

      <article className="prose prose-lg">
        <h1 className="text-3xl font-bold mb-6">Implementing GitOps with Kubernetes</h1>
        
        <p className="text-gray-600 mb-4">Published: {new Date().toLocaleDateString()}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            GitOps has revolutionized how we manage Kubernetes clusters. In this post, I will share my experience
            setting up FluxCD for continuous deployment...
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kubernetes cluster (v1.20+)</li>
            <li>Git repository for manifests</li>
            <li>Flux CLI installed</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation Steps</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {`# Bootstrap Flux
flux bootstrap github \\
  --owner=your-username \\
  --repository=gitops-repo \\
  --path=clusters/production \\
  --personal`}
          </pre>
        </div>
      </article>
    </div>
  );
};

export default KubernetesGitOps;
