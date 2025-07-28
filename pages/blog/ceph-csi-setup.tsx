import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

export default function CephCSISetup() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Ceph CSI Setup Guide | Your Name</title>
        <meta name="description" content="Step-by-step guide to setting up Ceph CSI in Kubernetes" />
      </Head>

      <article className="prose prose-lg dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Ceph CSI Setup in Kubernetes</h1>
        
        <div className="flex items-center mb-8">
          <span className="text-gray-500">Published: July 28, 2023</span>
          <span className="mx-2">•</span>
          <span className="text-gray-500">5 min read</span>
        </div>

        <div className="mb-8">
          <Image 
            src="/images/ceph-csi-diagram.png" 
            alt="Ceph CSI Architecture Diagram"
            className="rounded-lg shadow-md"
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            Ceph CSI (Container Storage Interface) allows Kubernetes to use Ceph RBD and CephFS volumes 
            as persistent storage for containerized applications. In this guide, I will walk through the setup 
            process I used in my production environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kubernetes cluster (v1.17+)</li>
            <li>Ceph cluster (Nautilus or newer)</li>
            <li>kubectl configured with cluster access</li>
            <li>Helm (for simplified deployment)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Installation Steps</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">1. Create Ceph User</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>
              {`ceph auth get-or-create client.kubernetes \
  mon 'allow r' \
  osd 'allow rwx pool=kube' \
  mgr 'allow r'`}
            </code>
          </pre>

          <h3 className="text-xl font-medium mt-6 mb-3">2. Deploy Ceph CSI via Helm</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>
              {`helm repo add ceph-csi https://ceph.github.io/csi-charts
helm install ceph-csi-rbd ceph-csi/ceph-csi-rbd --namespace ceph-csi --create-namespace`}
            </code>
          </pre>

          <h3 className="text-xl font-medium mt-6 mb-3">3. Create StorageClass</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>
              {`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ceph-rbd
provisioner: rbd.csi.ceph.com
parameters:
  clusterID: <ceph-cluster-id>
  pool: kube
  imageFeatures: layering
  csi.storage.k8s.io/provisioner-secret-name: ceph-csi-secret
  csi.storage.k8s.io/node-stage-secret-name: ceph-csi-secret`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Troubleshooting</h2>
          <p>Common issues I encountered:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Permission errors - double check your Ceph user capabilities</li>
            <li>CSI pods in CrashLoopBackoff - verify your clusterID and monitor addresses</li>
            <li>Mount timeouts - check network connectivity between nodes and Ceph cluster</li>
          </ul>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
