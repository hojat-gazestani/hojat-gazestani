import Head from "next/head";
import Link from "next/link";
import { BlogPost } from "../../types/blog";

export const blogPost: BlogPost[] = [
  {
    title: "Implementing GitOps with Kubernetes",
    description: "Guide to setting up GitOps workflows using Flux/ArgoCD",
    date: "2025-08-16",
    slug: "kubernetes-gitops",
    tags: ["Kubernetes", "GitOps", "Flux", "ArgoCD"],
  },
  {
    title: "Ceph CSI Setup in Kubernetes",
    description:
      "Step-by-step guide to setting up Ceph CSI for persistent storage",
    date: "2023-07-28",
    slug: "ceph-csi-setup",
    tags: ["Kubernetes", "Storage", "Ceph"],
  },
];

export default function BlogIndex() {
  const sortedPosts = [...blogPost].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Blog | Hojat Gazestani</title>
        <meta
          name="description"
          content="Technical blog about MLOPS, Kubernetes, DevOps, and cloud infrastructure"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Technical Blog</h1>

      <div className="space-y-8">
        {sortedPosts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 dark:border-gray-700 pb-8"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {post.title}
              </Link>
            </h2>
            <div className="flex items-center gap-4 mb-2">
              <time dateTime={post.date} className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <div className="flex gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="gb-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              Read more -
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
