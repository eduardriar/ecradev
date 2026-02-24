import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import content from "@/lib/content.json";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | ${content.blog.heading}`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-muted transition-colors hover:text-foreground"
      >
        &larr; {content.blog.backLink}
      </Link>
      <header className="mb-8">
        <time className="text-sm text-muted">{post.date}</time>
        <h1 className="mt-1 text-3xl font-bold">{post.title}</h1>
      </header>
      <div className="prose max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
