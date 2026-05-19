import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getContent, defaultLocale } from "@/lib/content";
import { getLocale } from "@/lib/get-locale";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts(defaultLocale);
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = getLocale();
  const content = getContent(locale);
  const post = getPostBySlug(params.slug, locale);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | ${content.blog.heading}`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const locale = getLocale();
  const content = getContent(locale);
  const post = getPostBySlug(params.slug, locale);
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
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
