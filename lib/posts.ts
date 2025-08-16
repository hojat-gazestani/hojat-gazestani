import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data
  };
}

// lib/posts.ts
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags?: string[];
}

// If you're NOT using markdown files, replace with this simple version:
export const getAllPosts = (): BlogPost[] => {
  return [
    {
      title: "Implementing GitOps with Kubernetes",
      slug: "kubernetes-gitops",
      date: "2025-08-16",
      description: "Guide to setting up GitOps workflows using Flux/ArgoCD",
      tags: ["Kubernetes", "GitOps"]
    },
    {
      title: "Ceph CSI Setup in Kubernetes",
      slug: "ceph-csi-setup",
      date: "2023-07-28",
      description: "Step-by-step guide to setting up Ceph CSI for persistent storage",
      tags: ["Kubernetes", "Storage"]
    }
  ];
};

export const getRecentPosts = (count = 2): BlogPost[] => {
  return getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
