import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    title: 'Ceph CSI Setup in Kubernetes',
    description: 'Step-by-step guide to setting up Ceph CSI for persistent storage',
    date: '2023-07-28',
    slug: 'ceph-csi-setup',
  },
  // Add more posts as you create them
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Blog | Your Name</title>
        <meta name="description" content="Technical blog about Kubernetes, DevOps, and cloud infrastructure" />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </Link>
            </h2>
            <time dateTime={post.date} className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
